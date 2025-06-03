import { type FC, useEffect } from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const HomePage: FC<Props> = () => {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      navigate('/steps/select-skip');
    })();
  }, []);

  return (
    <div className="bg-zinc-800 w-full h-full grid place-items-center pb-12">
      <p className="text-foreground text-4xl">You are being redirected to the skip selection page...</p>
    </div>
  );
};

export default HomePage;
