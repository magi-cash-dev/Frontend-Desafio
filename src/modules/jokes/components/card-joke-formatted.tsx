import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Joke } from "../types/joke";

export function CardJokeFormatted(props: { joke: Joke | undefined }) {
  const { joke } = props;

  return (
    <>
      {joke && (
        <div className="p-10">
          <div>
            <Card className="w-[550px]">
              <CardHeader className="flex flex-col items-center">
                <CardTitle>The Joke is:</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-center">
                <p>{joke.value}</p>
              </CardContent>
            </Card>
          </div>
          <div className="pt-10">
            <Card className="w-[550px]">
              <CardHeader className="flex flex-col items-center">
                <CardTitle>Result JSON:</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-row justify-center">
                <textarea disabled className="w-full h-[290px] col-span-30">
                  {JSON.stringify(joke, undefined, 10)}
                </textarea>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}
