import image from "../../../assets/body/Frame 35.png"
import FilledButton from "../../../component/reUseAble/filledButton";
import styles from "./index.module.css"

const Unlock = ()=>{
    return(
        <div className={styles.mainCont}>
            <img src={image} alt={""}/>
            <div className={styles.secondCont}>
                <h1>The unseen of spending three years at Pixelgrade</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum.
                    Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta.
                    Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor.
                    Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <FilledButton color={"#4CAF4F"} textColor={"#FFFFFF"} text={"Learn More"} border={"none"} padding={"10px 7px 8px"}/>
            </div>
        </div>
    )
}

export default Unlock;