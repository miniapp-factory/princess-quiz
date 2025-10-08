import { useMiniAppContext } from "./context/miniapp-provider";

export default function Share({ text }: { text: string }) {
  const { sdk, isInMiniApp } = useMiniAppContext();

  if (!isInMiniApp) {
    return null;
  }

  const handleShare = async () => {
    try {
      await sdk.share({
        title: "Disney Princess Quiz",
        description: text,
        url: window.location.href,
        imageUrl: `${process.env.NEXT_PUBLIC_URL}/icon.png`,
      });
    } catch (err) {
      console.error("Share failed", err);
    }
  };

  return (
    <button
      onClick={handleShare}
      className="mt-4 rounded bg-secondary px-4 py-2 text-white"
    >
      Share on Farcaster
    </button>
  );
}
