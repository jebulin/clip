import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ImageCarousel from "./Carousel";
import { BUSINESS_NUMBER } from "../config/constants";


const ViewProductCard = (props: {
  images: string[];
  onHide: () => void;
  show: boolean;
  product: { name: string; category: string; price: string };

}) => {
  const handleOrder = () => {
    const baseMessage = `Hello, I'm interested in the product: ${props.product.name} (Category: ${props.product.category}, Price: ${props.product.price}). Could you provide more details?`;
        const encodedMessage = encodeURIComponent(baseMessage);
        const WHATSAPP_URL = `https://wa.me/${BUSINESS_NUMBER}?text=${encodedMessage}`;
    
        window.open(WHATSAPP_URL, "_blank");
  }
  return (
    <Modal
      show={props.show}
      onHide={props.onHide} // Enables closing modal via header button or backdrop
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.product.name}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <ImageCarousel images={props.images}></ImageCarousel>
      </Modal.Body>
      <Modal.Footer>
        <div  style={{flex:1,flexDirection:'column', textAlign:'left'}}>
          <div style={{ color: "#888", fontSize: "0.9em" }}>
            {props.product.category}
            </div>
          <div style={{ color: "#A52A2A", fontWeight: "600", fontSize: "1.2em" }}>{props.product.price}</div>
        </div>
        <Button style={{ background: "#A52A2A" ,borderColor:'white' }} onClick={handleOrder}>
          Order
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ViewProductCard;
