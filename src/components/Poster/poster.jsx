import { Flex, Typography } from "antd";
import screens from "../../assets/screens.svg";
import "./poster.scss";

const Poster = () => {
    return(
        <Flex vertical className="poster-container">
            <img src={screens} alt="charts"></img>
            <div className="poster-footer">
                <h1>Fast, Efficient and Productive</h1>
                <p>In this kind of post, the blogger introduces a person they've interviewed and provides some background information about the interviewee and their work following this is a transcript of the interview.</p>
            </div>
        </Flex>
    )
}

export default Poster;