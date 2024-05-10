import { useEffect } from "react";
import { AppContainer } from "./components/AppContainer";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import JokeBalloon from "./components/JokeBalloon";
import { PageTitle } from "./components/PageTitle";
import { useGetRequest } from "./hooks/useRequest";
import { JokeResponseDto } from "./types/JokeResponseDto";

function App() {
  const { data, execute, isLoading } =
    useGetRequest<JokeResponseDto>("random-joke");

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <AppContainer>
      <Header>
        <PageTitle>CHUCK NORRIS JOKES</PageTitle>
      </Header>
      <JokeBalloon isLoading={isLoading} joke={data?.joke} />
      <Button onClick={execute} disabled={isLoading}>
        Show me another joke!
      </Button>
    </AppContainer>
  );
}

export default App;
