import { Button, Container, IconButton, TextField } from '@mui/material';
import { Nav } from '../Utils/Nav';
import { SideBar } from '../Utils/SideBar';
import { PageBlock } from '../Utils/PageBlock';
import '../CSS/CustomContainer.css';
import defaultAvatar from '../Images/standartavatar.jpg';
import like from '../Images/like.svg';
import repost from '../Images/repost.svg';
import SendIcon from '@mui/icons-material/Send';

function onSubmitComment(event) {
    alert("Hello frogs!");
}

export function Profile(params) {
    return (
        <div>
            <Nav></Nav>

            <div className='custom-container' style={{ backgroundColor: "white", paddingTop: "20px" }}>
                <SideBar></SideBar>
                <div style={{ display: "flex", height: "100%", width: "50%", backgroundColor: "grey", padding: "15px" }}>
                    <div className='content' style={{ display: "flex", width: "100%", height: "100%" }}>
                        <div className='avatar_cover' style={{ display: 'flex', alignItems: "center", justifyContent: "center", backgroundColor: "whitesmoke", minWidth: "200px", height: "243px", marginRight: "10px" }}>
                            <img style={{ width: "90%", height: "90%" }} src={defaultAvatar}></img>
                        </div>

                        <div className='main-block' style={{ width: "70%" }}>
                            <div className='about' style={{ backgroundColor: "white", padding: "1px", marginBottom: "8px" }}>
                                <div className='nameandstatus' style={{ display: 'flex', justifyContent: "space-between", padding: "8px 15px 0", margin: "0" }}>
                                    <div className='name'>
                                        <p>Vasya Vasev</p>
                                    </div>
                                    <div className='status'>
                                        <p>Online</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='personal-info' style={{ display: 'flex', justifyContent: "space-between", padding: "0px 15px" }}>
                                    <div className='titles'>
                                        <p>Дата рождения</p>
                                        <p>Город</p>
                                        <p>Образование</p>
                                    </div>

                                    <div className='values'>
                                        <p>30.05.2003</p>
                                        <p>Москва</p>
                                        <p>РУТ МИИТ</p>
                                    </div>
                                </div>

                                <hr></hr>

                                <div className='counters' style={{ display: 'flex', justifyContent: "center", textAlign: "center" }}>
                                    <div className='item'>
                                        <p>4</p>
                                        <p>Друзей</p>
                                    </div>
                                    <div className='item'>
                                        <p>2</p>
                                        <p>Фотографий</p>
                                    </div>
                                    <div className='item'>
                                        <p>2</p>
                                        <p>Поста</p>
                                    </div>
                                </div>
                            </div>

                            <div className='posts' style={{ boxSizing: "border-box" }}>
                                <div className='post' style={{ height: "100%", backgroundColor: "white", padding: "8px" , marginBottom:"10px"}}>
                                    <div className='creator' style={{ display: 'flex', alignItems: "center", marginBottom: "8px" }}>
                                        <div className='left' style={{ height: "48px", width: "48px", marginRight: "5px" }}>
                                            <img src={defaultAvatar} style={{ height: "48px", width: "48px", borderRadius: "100px" }}></img>
                                        </div>

                                        <div className='right'>
                                            <p className='name'>Vasya Vasev</p>
                                            <p className='date'>10 апреля</p>
                                        </div>
                                    </div>

                                    <div className='content' style={{ marginBottom: "8px" }}>
                                        <div className='avatar_cover' style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                                            <img src={defaultAvatar} style={{ width: "80%", height: "80%" }}></img>
                                        </div>
                                    </div>

                                    <div className='actions' style={{ marginBottom: "8px" }}>
                                        <img className='like item' src={like}></img>
                                        <img className='repost item' src={repost}></img>
                                    </div>

                                    <div className='comments' style={{ display: "flex", marginBottom:"8px" }}>
                                        <form method='post' onSubmit={onSubmitComment}>
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Написать комментарий"
                                                    className='comment_input'
                                                    multiline
                                                    maxRows={1}
                                                />
                                                <IconButton type='submit' className='submit_button' variant="contained">
                                                    <SendIcon></SendIcon>
                                                </IconButton>
                                        </form>
                                    </div>
                                </div>

                                <div className='post' style={{ height: "100%", backgroundColor: "white", padding: "8px" , marginBottom:"10px"}}>
                                    <div className='creator' style={{ display: 'flex', alignItems: "center", marginBottom: "8px" }}>
                                        <div className='left' style={{ height: "48px", width: "48px", marginRight: "5px" }}>
                                            <img src={defaultAvatar} style={{ height: "48px", width: "48px", borderRadius: "100px" }}></img>
                                        </div>

                                        <div className='right'>
                                            <p className='name'>Vasya Vasev</p>
                                            <p className='date'>10 апреля</p>
                                        </div>
                                    </div>

                                    <div className='content' style={{ marginBottom: "8px" }}>
                                        <div className='avatar_cover' style={{ display: "flex", justifyContent: "center", width: "100%", height: "100%" }}>
                                            <p>„Hello frogs!“</p>
                                        </div>
                                    </div>

                                    <div className='actions' style={{ marginBottom: "8px" }}>
                                        <img className='like item' src={like}></img>
                                        <img className='repost item' src={repost}></img>
                                    </div>

                                    <div className='comments' style={{ display: "flex", marginBottom:"8px" }}>
                                        <form method='post' onSubmit={onSubmitComment}>
                                                <TextField
                                                    id="outlined-multiline-flexible"
                                                    label="Написать комментарий"
                                                    className='comment_input'
                                                    multiline
                                                    maxRows={1}
                                                />
                                                <IconButton type='submit' className='submit_button' variant="contained">
                                                    <SendIcon></SendIcon>
                                                </IconButton>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}