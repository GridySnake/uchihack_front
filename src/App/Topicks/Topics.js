import React from "react";


class Topics extends React.Component {
    render() {

        return (
            <div className={`container`}>
                <div className={`container__content container__content_greenFloor container__content_relative  topic `}>

                    <div className={`topic__dragon`}/>

                    <div className={`topic__content`}>
                        <div className={`topic__questionBlock`}>
                            <div className={`topic__questionButton`}>
                                <button className={`button`}>Задай вопрос</button>
                            </div>
                        </div>
                        <div className={`topic__list`}>
                            <div className={`topic__elContainer`}>
                                <div className={`topic__el topic__el_theme_background_white`}>
                                    <div className={`topic__elImg topic__elImg_math topic__elImg_1`}/>
                                    <div className={`topic__Font topic__elName`}>
                                        Математика
                                    </div>
                                    <div className={`topic__Font topic__countQuestion`}>
                                        15 вопросов
                                    </div>
                                </div>
                            </div>
                            <div className={`topic__elContainer`}>
                                <div className={`topic__el topic__el_theme_background_whitePink`}>
                                    <div className={`topic__elImg topic__elImg_rusLang topic__elImg_1`}/>
                                    <div className={`topic__Font topic__elName`}>
                                        Русский язык
                                    </div>
                                    <div className={`topic__Font topic__countQuestion`}>
                                        10 вопросов
                                    </div>
                                </div>
                            </div>
                            <div className={`topic__elContainer`}>
                                <div className={`topic__el topic__el_theme_background_redPink`}>
                                    <div className={`topic__elImg topic__elImg_informatics topic__elImg_1`}/>
                                    <div className={`topic__Font topic__elName`}>
                                        Информатика
                                    </div>
                                    <div className={`topic__Font topic__countQuestion `}>
                                        38 вопросов
                                    </div>
                                </div>
                            </div>
                            <div className={`topic__elContainer`}>
                                <div className={`topic__el topic__el_theme_background_pink`}>
                                    <div className={`topic__elImg topic__elImg_engLang topic__elImg_1`}/>
                                    <div className={`topic__Font topic__elName`}>
                                        Английский язык
                                    </div>
                                    <div className={`topic__Font topic__countQuestion`}>
                                        7 вопросов
                                    </div>
                                </div>
                            </div>
                            <div className={`topic__elContainer`}>
                                <div className={`topic__el topic__el_theme_background_whiteGreen`}>
                                    <div className={`topic__elImg topic__elImg_biology  topic__elImg_1`}/>
                                    <div className={`topic__Font topic__elName`}>
                                        Биология
                                    </div>
                                    <div className={`topic__Font topic__countQuestion`}>
                                        5 вопросов
                                    </div>
                                </div>
                            </div>
                            <div className={`topic__elContainer`}>
                                <div className={`topic__el topic__el_theme_background_whiteYellow`}>
                                    <div className={`topic__elImg topic__elImg_history topic__elImg_1`}/>
                                    <div className={`topic__Font topic__elName`}>
                                        История
                                    </div>
                                    <div className={`topic__Font topic__countQuestion`}>
                                        2 вопроса
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Topics;

