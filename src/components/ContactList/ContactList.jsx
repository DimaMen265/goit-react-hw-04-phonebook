import { Component } from "react";
import styles from "./ContactList.module.css";

export class ContactList extends Component {
    render() {
        const { contacts } = this.props;
        return (
            <div className={styles.wrapper}>
                {contacts.length > 0 ? (
                    <ul className={styles.listContact}>
                        {contacts.map(item => (
                            <li key={item.id}>
                                <div className={styles.wrapperItem}>
                                    <p className={styles.textItem}>
                                        {item.name}: <a href={`tel:${item.number}`} className={styles.tel} >{item.number}</a> 
                                    </p>
                                    
                                    <button onClick={() => this.props.onDelete(item.id)} className={styles.buttonDelete}>Delete</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className={styles.textNoContacts}>No contacts...</p>
                )}
            </div>
        );
    };
};