import TemplatePost from "../../Components/TemplatePost/TemplatePost";
import styles from './AboutMe.module.css';
import img from '../../assets/historia.jpg'

export default function AboutMe(){
    return(
        <TemplatePost 
            coverPhoto={<></>}
            title='About porsche'>

            <h3 className={styles.caption}>
                Porsche
            </h3>

            <img 
                className={styles.AboutMePhoto}
                src={img}
                alt="Foto"
            />

            <p className={styles.paragraph}>
                laboriosam, ad veritatis dolore voluptas exercitationem.
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde, sapiente eligendi voluptatem quos laboriosam, ad veritatis dolore voluptas exercitationem adipisci quam doloremque sed neque porro nulla eos aliquam rerum.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi, laborum repellendus possimus impedit maiores quos, tempore quod magnam modi animi ullam optio esse laboriosam corporis, nulla porro voluptatem! Unde.
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore unde, sapiente eligendi voluptatem quos laboriosam, ad veritatis dolore voluptas exercitationem adipisci quam doloremque sed neque porro nulla eos aliquam rerum.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi, laborum repellendus possimus impedit maiores quos, tempore quod magnam modi animi ullam optio 
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi, laborum repellendus possimus impedit maiores quos, tempore quod magnam modi animi ullam optio 
            </p>
            <p className={styles.paragraph}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi, laborum repellendus possimus impedit maiores quos, tempore quod magnam modi animi ullam optio laboriosam, ad veritatis dolore voluptas exercitationem adipisci quam doloremque sed neque porro nulla eos aliquam rerum.

            </p>
            <p className={styles.paragraph}>
                Dlaboriosam, ad veritatis dolore voluptas exercitationem adipisci quam doloremque sed neque porro nulla eos aliquam rerum.
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus eligendi, laborum repellendus possimus impedit maiores quos, tempore quod magnam modi animi ullam optio esse laboriosam corporis, nulla porro voluptatem! Unde.
            </p>
        </TemplatePost>
    )
}