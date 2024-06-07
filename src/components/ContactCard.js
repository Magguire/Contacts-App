import user from "../images/user.png";

const ContactCard = ({contact, clickHandler}) => {
    return (
        <div className="item">
            <img className="ui avatar image" src={user} alt="user" />
            <div className="content">
                <div className="header">{contact.name}</div>
                <div>{contact.email}</div>
            </div>
            <i className="trash alternate outline icon"
               style={{color:"red", marginTop:"7px"}}
            onClick={() => {clickHandler(contact.id)}}></i>
        </div>
    );
};

export default ContactCard;