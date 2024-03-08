import '../Style/Style.css'

const Navbarbtn = ({ value }) => {
    
    const { src, state, href,defaultText} = value;
    const values = state;

    return (

            <li>
                <a href={href} title={defaultText} className='icon'>
                    <div className="flex items-center justify-center rounded-2xl gap-2" >
                        <lord-icon
                            target="div"
                            src={src}
                            trigger="hover"
                            state={values ? values : null}
                            class="current-color"
                            style={{ width: "30px", height: "30px" }}>
                        </lord-icon>
                    </div>
                    
                    </a>

            </li>
        
    );
};

export default Navbarbtn;