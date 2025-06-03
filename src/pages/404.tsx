import { type FC } from 'react';
import { useNavigate } from 'react-router';

interface Props {}

const NotFoundPage: FC<Props> = () => {
  const navigate = useNavigate();

  const goToSelectSkip = () => {
    navigate('/steps/select-skip');
  };

  return (
    <div className="w-full h-full grid place-items-center">
      <div className="pb-24 text-center">
        <h3 className='text-white text-4xl'>Upps 404</h3>
        <p className="mt-1.5 text-zinc-500">Page not found</p>
        <p className="mt-1.5 text-zinc-500">The page you are looking for does not exist.</p>
        <p className="mt-1.5 text-zinc-500">Please check the URL or return to the homepage.</p>
        <button
          type="button"
          onClick={goToSelectSkip}
          className="mt-6 px-6 py-2 bg-foreground text-black rounded-lg transition-colors"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFoundPage;
