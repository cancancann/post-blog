import { Card, Col, Row } from "antd"
import moment from "moment"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { request } from "../../request/Request"
import { setPosts } from "../../store/postSlice/PostSlice"

const Home = () => {
    const { posts } = useSelector((state) => state.post)
    const dispatch = useDispatch()


    useEffect(() => {
        request.get('/post/list').then((res) => {
            dispatch(setPosts(res.data))
        })
    }, [])
    return (
        <>
            <Row>
                <Col span={24}>
                    {posts && posts.map((item) => {
                        return (
                            <Card style={{ marginBottom: "16px" }} key={item._id} title={item.userId?.full_name}
                                actions={[
                                    <div>
                                        {
                                            moment().diff(moment(item.createdAt), 'hour') === 0 ? moment().diff(moment(item.createdAt), 'minute') + " dk önce" :
                                                moment().diff(moment(item.createdAt), 'hour') + ' saat önce'
                                        }
                                    </div>

                                ]} >
                                {item.text}
                            </Card>
                        )

                    })}
                </Col>
            </Row>
        </>
    )
}

export default Home