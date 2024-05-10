import { Skeleton } from "./Skeleton";
import { SpeechBalloon } from "./SpeechBubble";

type Props = {
  isLoading?: boolean;
  joke?: string;
};

export default function JokeBalloon({ isLoading, joke }: Props) {
  return <SpeechBalloon>{isLoading ? <Skeleton /> : joke}</SpeechBalloon>;
}
