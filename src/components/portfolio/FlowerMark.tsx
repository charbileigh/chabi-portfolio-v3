import flowerMark from "@/assets/flower-mark.svg";

export function FlowerMark({ size = 28, className }: { size?: number; className?: string }) {
  return <img src={flowerMark} width={size} height={size} alt="" aria-hidden="true" className={className} />;
}
