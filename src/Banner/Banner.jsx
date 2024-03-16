function Banner(){
    return(
        <div className="bg-[url('./banner.png')] md:h-[600px] bg-no-repeat bg-contain flex flex-col justify-center">
            <h1 className="text-center text-white text-xl lg:text-5xl font-bold p-1 md:p-4">Discover an exceptional cooking <br /> class tailored for you!</h1>
            <p className="text-center text-base md:text-lg text-white p-1 md:p-6">LUnleash your culinary creativity with personalized instruction. Elevate your skills and savor every moment. <br /> Join us today!</p>
            <div className="flex justify-center gap-10">
                <button className="btn rounded-3xl bg-green-400">Explore Now</button>
                <button className="btn btn-ghost border-white border rounded-3xl text-white">Our Feedback</button>
            </div>
        </div>
    )
}

export default Banner