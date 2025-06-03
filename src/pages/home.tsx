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
    <div className="bg-gray-100 w-full h-full grid place-items-center pb-12">
      <p>
        Loading...
      </p>
    </div>
  );
};

export default HomePage;
