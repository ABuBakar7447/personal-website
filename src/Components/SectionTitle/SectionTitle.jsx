

const SectionTitle = ({ value }) => {
    const { src, state, text } = value;
    const values = state;

    return (
        <div>
            <div className="flex items-center justify-center border-white border-[1px] rounded-2xl w-36 gap-2 p-1 mb-16">
                <lord-icon
                    target="div"
                    src={src}
                    trigger="hover"
                    state={values ? values : null}
                    colors="primary:#fff"
                    style={{ width: "18px", height: "18px", }}>
                </lord-icon>

                
                <p className="text-[#fff]">{text}</p>
                
            </div>
        </div>
    );
};

export default SectionTitle;