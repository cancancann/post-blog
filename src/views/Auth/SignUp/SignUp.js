import { Card, Form, Row, Col, Input, Select, DatePicker, Button } from "antd";
import './SignUp.css'
import logo from '../../../assets/logo.png'
import { useNavigate } from "react-router-dom"
import { useState } from "react";
import { request } from "../../../request/Request";

const SignUp = () => {
    const cities = ["Adana", "Adıyaman", "Afyon", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir", "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır", "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkari", "Hatay", "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir", "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde", "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa", "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın", "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
    ]
    const genders = [{
        value: 'man',
        label: 'Erkek'
    },
    {
        value: 'female',
        label: 'Kadın'
    },
    {
        value: 'unknown',
        label: 'Belirtmek istemiyorum'
    }

    ]
    const navigate = useNavigate()
    const [isExistUserName, setIsExistUserName] = useState(false)
    const [isExistEmail, setIsExistEmail] = useState(false)
    const [form] = Form.useForm()

    const handleUserNameExist = (userName) => {
        setIsExistUserName(true)
        request.post('/user/isExistUserName', {
            userName
        }).then((res) => {
            setIsExistUserName(false)
            if (res.data.isExist) {
                form.setFields([{
                    name: 'username',
                    errors: ['Kullanıcı Adı Mevcut']
                }])
            }
        })
    }
    const handleEmailExist = (email) => {
        setIsExistEmail(true)
        request.post('/user/isExistUserMail', {
            email
        }).then((res) => {
            setIsExistEmail(false)
            if (res.data.isExist) {
                form.setFields([{
                    name: 'email',
                    errors: ['Email Mevcut']
                }])
            }
        })
    }
    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email)
    }

    const registerUser = () => {
        request.post('/user/signup', {
            name: form.getFieldValue('name'),
            surname: form.getFieldValue('surname'),
            user_name: form.getFieldValue('username'),
            email: form.getFieldValue('email'),
            gender: form.getFieldValue('gender'),
            password: form.getFieldValue('password'),
            city: form.getFieldValue('city'),
            birth_date: form.getFieldValue('birthdate')
        }).then((res) => {
            if (res.data) {
                navigate('/auth/sign-in')
            }
        })
    }

    const handleValidate = () => {
        form.setFields([{
            name: 'name',
            errors: form.getFieldValue('name') ? [] : ['Ad Giriniz !']
        },
        {
            name: 'surname',
            errors: form.getFieldValue('surname') ? [] : ['Soyad Giriniz !']
        }, {
            name: 'username',
            errors: form.getFieldValue('username') ? [] : ['Kullanıcı Adı Giriniz !']
        },
        {
            name: 'email',
            errors: validateEmail(form.getFieldValue('email')) ? [] : ['Kullanıcı Email Giriniz !']
        },
        {
            name: 'birthdate',
            errors: form.getFieldValue('birthdate') ? [] : ['Kullanıcı Doğum Tarihi Giriniz !']
        },
        {
            name: 'password',
            errors: form.getFieldValue('password').length > 7 ? [] : ['Parola Giriniz !']
        },
        ])
        const errors = form.getFieldsError()
        let isExistError = false
        for (let i = 0; i < errors.length; i++) {
            if (errors[i].errors.length > 0) {
                isExistError = true
                break
            }
            isExistError = false
        }
        if (!isExistError) {
            registerUser()
        }
    }
    return (
        <Card className="sign-up-card">
            <div className="sign-up-logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
            <Form
                form={form}
                layout="vertical"
                autoComplete="off"
                initialValues={{
                    name: '',
                    surname: '',
                    username: '',
                    email: '',
                    city: 'Ankara',
                    gender: 'unknown',
                    birthdate: '',
                    password: ''
                }}
            >

                <Row gutter={16}>
                    <Col span={8}>
                        <Form.Item label="Ad" required name="name"
                            rules={[{ required: true, message: "Lütfen ad giriniz !" }]}>
                            <Input placeholder="Adınız" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Soyad" required name="surname"
                            rules={[{ required: true, message: "Lütfen soyad giriniz !" }]}>
                            <Input placeholder="Soyadınız" />
                        </Form.Item>
                    </Col>
                    <Col span={8}>
                        <Form.Item label="Cinsiyet" required name="gender"
                            rules={[{ required: true, message: "Lütfen cinsiyet seçiniz !" }]}>
                            <Select placeholder="Cinsiyet Seçiniz" defaultValue="unknown">
                                {genders.map((item) => {
                                    return (
                                        <Select.Option key={item.value} value={item.value}>{item.label}</Select.Option>

                                    )
                                })}

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Kullanıcı Adı" required name="username"
                            rules={[{ required: true, message: "Lütfen kullanıcı adı giriniz !" }, {
                                min: 3,
                                message: "Min 3 karakter giriniz"
                            }]}>
                            <Input.Search onChange={(e) => {
                                handleUserNameExist(e.target.value)
                            }} placeholder="Kullanıcı Adı" loading={isExistUserName} />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Email" required name="email" rules={[{
                            required: true,
                            type: "email",
                            message: "Lütfen geçerli bir email giriniz !"
                        }]}>
                            <Input.Search onChange={(e) => {
                                handleEmailExist(e.target.value)
                            }} placeholder="Email" loading={isExistEmail} />
                        </Form.Item>
                    </Col>
                </Row>

                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item label="Doğum Tarihi" required name="birthdate"
                            rules={[{ required: true, message: "Lütfen tarih seçiniz !" }]}>
                            <DatePicker placeholder="YYYY-MM-DD" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item label="Şehir" required name="city"
                            rules={[{ required: true, message: "Lütfen şehir seçiniz !" }]}>
                            <Select defaultValue="Adana" placeholder="Yaşadığı Şehir">
                                {cities.map((item) => {
                                    return (
                                        <Select.Option key={item} value={item}>{item}</Select.Option>
                                    )
                                })}

                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item label="Parola" required name="password"
                            rules={[{ required: true, message: "Lütfen parola giriniz !" }, {
                                min: 8,
                                message: "Lütfen 8 karakterlik bir parola olusturun"
                            }]}>
                            <Input.Password placeholder="Parola" />

                        </Form.Item>
                    </Col>

                </Row>

                <Row gutter={16}>
                    <Col span={24}>
                        <Button onClick={handleValidate} className="w-full" type="primary">Kayıt Ol !</Button>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Button className="w-full" type="link" onClick={() => {
                            navigate('/auth/sign-in')
                        }}>Giriş Yap !</Button>
                    </Col>
                </Row>

            </Form>
        </Card>
    )
}
export default SignUp
