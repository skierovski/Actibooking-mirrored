import './SectionTitle.css'

const SectionTitle = props =>{
    return(
        <div className="section-title">
            <p>
                {props.value}
            </p>
        </div>
    )
}

export default SectionTitle;