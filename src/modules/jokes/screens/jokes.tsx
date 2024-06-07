import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SelectCategoryJoke } from "../components/select-category-joke";
import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";
import { Spinner } from "@/components/spinner";
import { useJoke } from "../hooks/use-joke";
import { CardJokeFormatted } from "../components/card-joke-formatted";
import { useState } from "react";

export function JokesScreen() {
  const [category, setCategory] = useState<string>("");
  const { error, fetchJoke, isLoading, joke } = useJoke({ category });

  return (
    <div className="bg-card flex flex-col justify-center items-center">
      <div className="pt-10">
        <Card className="w-[550px]">
          <CardHeader className="flex flex-col items-center">
            <CardTitle>Chuck Norris Joke</CardTitle>
            <CardDescription>
              Generate a joke about Chuck Norris.
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-row">
            <div className="w-full pr-1">
              <SelectCategoryJoke
                onChange={(value) => setCategory(value)}
                value={category}
              />
            </div>
            <Button
              className="bg-sky-800"
              onClick={() => {
                setCategory("");
              }}
            >
              Clear
            </Button>
          </CardContent>
          <CardFooter className="flex flex-col justify-between gap-4">
            <Button className="w-full" onClick={() => fetchJoke()}>
              Get a new Joke
            </Button>
            {isLoading && <Spinner />}
            {!isLoading && !joke && <p>Click on the button for a Joke!</p>}
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardFooter>
        </Card>
      </div>
      <CardJokeFormatted joke={joke} />
    </div>
  );
}
