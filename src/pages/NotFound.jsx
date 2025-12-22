import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container-custom section-padding text-center">
      <h1>404 - Page Not Found</h1>
      <p className="my-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn-primary inline-block">
        Go Home
      </Link>
    </div>
  );
}
