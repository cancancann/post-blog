import { Row, Col, Input, Button } from "antd"
import { useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { request } from "../../../request/Request"

const PostCreate = () => {
    const navigate = useNavigate()
    const { user } = useSelector((state) => state.auth)
    const { socketID } = useSelector((state) => state.socketIO)
    const [text, setText] = useState("")
    const createPost = () => {
        request.post('post/create', {
            text,
            userId: user.user._id,
            socketId: socketID
        }).then(() => {
            setText('')
            navigate('/')
        })
    }
    return (
        <div>
            <Row>
                <Col span={24}>
                    <label>Mesaj Yaz</label>
                    <Input.TextArea value={text} onChange={(e) => {
                        setText(e.target.value)
                    }} style={{ marginTop: "8px", height: "150px" }} />

                </Col>
            </Row>
            <Row style={{marginTop:"24px"}}>
                <Col span={24}>
                    <Button type="primary" className="w-full" onClick={() => {
                        createPost()
                    }}>Gönder!</Button>
                </Col>
            </Row>
        </div>
    )
}

export default PostCreate