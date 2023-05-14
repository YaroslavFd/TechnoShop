import NotFound from 'components/NotFound';
import { Section } from 'containers/Section';

const NotFoundPage = () => {
  return (
    <>
      <Section className="not-found" classNameContainer={'not-found-container'}>
        <NotFound />
      </Section>
    </>
  );
};

export default NotFoundPage;
