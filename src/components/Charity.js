import {Card, CardImg, CardText, CardBody,CardTitle, Button, CardSubtitle} from 'reactstrap';
import {Link} from 'react-router-dom'

const Charity = (props) => {
    return(
        <div className="charity-card-container" id={props.charity.key}>
            <Card className='card'>
                <CardImg top id='als-img' src={props.charity.img} alt="ALS Association Logo" />
                <CardBody className="charity-card">
                    <CardTitle tag="h5">{props.charity.charityName}</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{props.charity.subtitle}</CardSubtitle>
                    <CardText>{props.charity.missionStatement}</CardText>
                    <div className="charity-btn-container">
                        <Link rel={'external'} target="_blank" to={{pathname: props.charity.link}}><Button className="charity-btn">Learn More</Button></Link>
                        <Link  rel={'external'} target="_blank" to={{pathname: props.charity.goFundMe}} ><Button className="charity-btn">Donate!</Button></Link>
                    </div>
                </CardBody>
            </Card>
        </div>
    )
}

export default Charity;