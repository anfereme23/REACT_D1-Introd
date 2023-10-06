import Card from "react-bootstrap/Card"
import Tags from "./Tags"

function DogsCard (props){
const {src, name, description, colorTags, textTags} = props
return(
    <>
    <Card className="card">
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Tags className="badge" colorTags={colorTags} textTags={textTags}/>
      </Card.Body>
    </Card>
    </>
)
}

export default DogsCard 