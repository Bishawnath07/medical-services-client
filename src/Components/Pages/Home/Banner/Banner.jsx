import img from '../../../../assets/hero.jpg';

const Banner = () => {
    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
                    <h2 className='text-xl  md:text-5xl font-bold '>The Best <br /> Medical services</h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt vero sequi architecto voluptas ullam est nobis dignissimos recusandae ad, nemo a nam ipsum modi sapiente dolore. Laudantium, nam exercitationem.</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Read More</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-5 bottom-0">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
            <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
                    <h2 className='text-xl  md:text-5xl font-bold '>The Best <br /> Medical services</h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt vero sequi architecto voluptas ullam est nobis dignissimos recusandae ad, nemo a nam ipsum modi sapiente dolore. Laudantium, nam exercitationem.</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Read More</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-5 bottom-0">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
            <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
                    <h2 className='text-xl  md:text-5xl font-bold '>The Best <br /> Medical services</h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt vero sequi architecto voluptas ullam est nobis dignissimos recusandae ad, nemo a nam ipsum modi sapiente dolore. Laudantium, nam exercitationem.</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Read More</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-5 bottom-0">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
            <div className='absolute lg:top-20 ml-8 lg:w-2/5'>
                    <h2 className='text-xl  md:text-5xl font-bold '>The Best <br /> Medical services</h2>
                    <p className='my-1 text-sm md:text-lg md:my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe incidunt vero sequi architecto voluptas ullam est nobis dignissimos recusandae ad, nemo a nam ipsum modi sapiente dolore. Laudantium, nam exercitationem.</p>
                    <button className="btn btn-info  bg-gradient-to-r from-cyan-500 to-blue-500">Read More</button>
                </div>
                <img src={img} className="w-full" />
                <div className="absolute flex gap-5  right-5 bottom-0">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default Banner;