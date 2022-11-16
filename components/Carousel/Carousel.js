import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

const Carousel = () => {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      isIntrinsicHeight={true}
      totalSlides={6}
      visibleSlides={1}
      step={1}
      infinite={true}
    >
      <div className="js-flickity xl:pl-24">
        <Slider>
          <Slide index={0}>
            <div className="mx-auto hero_container">
              <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                <svg
                  className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2 hero_svg"
                  fill="currentColor"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <polygon points="50,0 100,0 50,100 0,100" />
                </svg>
                <div className="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
                <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-6 xl:mt-28">
                  <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl tracking-tight font-extrabold text-black sm:text-5xl md:text-6xl">
                      <span className="block xl:inline">
                        Elden Ring is coming soon
                      </span>{' '}
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat aliqua.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                      <div className="rounded-md shadow">
                        <a
                          href="/reviews/Elden-Ring"
                          className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-gray-400 md:py-4 md:text-lg md:px-10"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </main>
              </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/3">
              <img
                className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
                src="https://static.bandainamcoent.eu/high/elden-ring/elden-ring/00-page-setup/elden-ring-new-header-mobile.jpg"
                alt=""
              />
            </div>
          </Slide>
        </Slider>
        <ButtonBack
          role="button"
          aria-label="slide backward"
          className="w-6 h-6 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute left-[0%] top-[50%] lg:ml-8 -ml-4  cursor-pointer z-30"
          id="prev"
        >
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 1L1 7L7 13"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonBack>
        <ButtonNext
          role="button"
          aria-label="slide forward"
          className="w-6 h-6 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute right-[0%] top-[50%] lg:mr-8 -mr-4 "
          id="next"
        >
          <svg
            width={8}
            height={14}
            viewBox="0 0 8 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7 7L1 13"
              stroke="black"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </ButtonNext>
      </div>
    </CarouselProvider>
  );
};

export default Carousel;
