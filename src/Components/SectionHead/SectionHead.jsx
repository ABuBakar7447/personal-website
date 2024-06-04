

const SectionHead = ({headone, headtwo}) => {
    return (
        <div>
            <p className="lg:text-5xl text-4xl mb-16 text-gray-400">{headone} <span className="text-[#03C988]">{headtwo}</span></p>
        </div>
    );
};

export default SectionHead;