
export const getJokeAndImage = async (): Promise<{
  joke: string;
  image: string;
  url: string;
}> => {
  const API_URL = 'http://localhost:3000/random-joke';
  const IMAGE_URL = 'https://picsum.photos/500/?blur';

  const [data, imageBlob] = await Promise.all([
    fetch(API_URL).then((res) => res.json()),
    fetch(IMAGE_URL).then((res) => res.blob()),
  ]);

  const joke = data.value;
  const url = data.url;
  const image = URL.createObjectURL(imageBlob);

  return { joke, image, url };
};
