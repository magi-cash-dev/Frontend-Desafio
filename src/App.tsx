import { useEffect } from "react";
import { getRandomJoke } from "./api/requests";
import { AppContainer } from "./components/AppContainer";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import JokeBalloon from "./components/JokeBalloon";
import { PageTitle } from "./components/PageTitle";
import { useRequest } from "./hooks/useRequest";

function App() {
  const { data, execute, isLoading } = useRequest(getRandomJoke);

  useEffect(() => {
    execute();
  }, [execute]);

  return (
    <AppContainer>
      <Header>
        <PageTitle>CHUCK NORRIS JOKES</PageTitle>
      </Header>
      <JokeBalloon isLoading={isLoading} joke={data?.joke} />
      <div>
        <Button onClick={execute} disabled={isLoading}>
          Show me some joke!
        </Button>
      </div>
    </AppContainer>
  );
}

export default App;
