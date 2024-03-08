

const SectionHead = ({headone, headtwo}) => {
    return (
        <div>
            <p className="text-5xl mb-16 text-gray-400">{headone} <span className="text-[#03C988]">{headtwo}</span></p>
        </div>
    );
};

export default SectionHead;