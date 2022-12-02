import styles from './ChildPage.module.css'

const ChildPage = (props) => {
    const children = props.data.children
    return(
        <div>
            {children.map((o, key) => (
                <div>
                    <p>{o.name} {o.lastName}</p>
                </div>
            ))}
        </div>
    )
}

export default ChildPage;