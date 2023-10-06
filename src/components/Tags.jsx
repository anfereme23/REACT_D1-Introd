import Badge from 'react-bootstrap/Badge'

function Tags(props){
const {colorTags, textTags} = props
return(
    <>
        <Badge bg={colorTags}>{textTags}</Badge> 
    </>
)
}

export default Tags