import React from "react";


export default function Header({stars, name}) {

    return (
        <div className={`container container_header`}>
            <header className={`container__content header`}>
                <div className={`header__content`}>
                    <div className={`header__userData`}>
                        <div className={`header__stars`}>
                            <div className={`header__starImg`}></div>
                            {stars}
                        </div>
                        <div className={`header__userName`}>
                            {name}
                        </div>
                    </div>
                    <div className={`header__title`}>Учимся вместе</div>
                    <div className={`header__icons`}>
                        <div className={`header__icon header__icon_search`}>
                            {searchSvg}
                        </div>
                        <div className={`header__icon header__icon_bell`}>
                            {bell}
                        </div>
                        <div className={`header__icon header__icon_message`}>
                            {messages}
                        </div>
                        <div className={`header__icon header__icon_menu`}>
                            {menu}
                        </div>
                        <div className={`header__icon header__icon_logout`}>
                            {logout}
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}



const searchSvg = (
    <svg width="42" height="40" viewBox="0 0 42 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.33836 26.2394C12.1627 26.7281 14.9794 26.5079 17.9502 25.566C19.6828 25.0298 21.335 24.2599 22.8621 23.2779C23.1493 23.5987 23.4337 23.9179 23.7152 24.2355C24.4063 25.014 25.0605 25.7494 25.7446 26.4872C29.0876 30.0938 32.7143 33.5231 36.2216 36.8396C36.8591 37.4426 37.4963 38.046 38.1332 38.6498C38.6325 39.1077 39.1808 39.5082 39.7682 39.844C39.9132 39.9216 40.076 39.9599 40.2402 39.9552C40.412 39.9577 40.5823 39.9218 40.7387 39.8499C40.8233 39.8072 40.8985 39.7477 40.9598 39.6752C41.0212 39.6026 41.0676 39.5184 41.096 39.4276C41.1296 39.3194 41.1417 39.2057 41.1314 39.0926C41.1213 38.9798 41.0891 38.8701 41.0367 38.7696C40.7592 38.186 40.4201 37.6342 40.0253 37.1235C39.389 36.3647 38.712 35.6411 37.9975 34.9562C36.3332 33.337 34.6342 31.6984 32.991 30.1137C31.8517 29.015 30.713 27.9155 29.5754 26.815C28.401 25.6779 27.2574 24.5608 26.0468 23.3764C25.5537 22.8943 25.0575 22.4096 24.5582 21.9221L24.6229 21.8508C24.717 21.7474 24.79 21.667 24.8677 21.5913C26.76 19.7489 27.7975 17.444 27.9514 14.7412C28.2188 10.0476 26.6452 6.06321 23.2751 2.89728C21.624 1.30926 19.482 0.337595 17.2053 0.143917C14.9911 -0.0702388 12.7569 0.184961 10.6469 0.893056C7.41213 1.99916 4.66621 4.12118 2.48581 7.20033C0.607143 9.85321 -0.145858 12.7968 0.247743 15.9493C0.504469 18.0064 1.33247 19.9557 2.93217 22.2703C4.44387 24.4565 6.53898 25.7548 9.33836 26.2394ZM12.6836 3.31389C13.436 3.24965 14.2141 3.1834 14.9782 3.15797C15.1077 3.15391 15.2359 3.1518 15.3629 3.15169C18.8458 3.15169 21.5221 4.74033 23.3219 7.87779C24.9327 10.6852 25.3884 13.3758 24.7153 16.1029C24.4845 17.1255 24.0238 18.0814 23.3685 18.897C22.5551 19.8914 21.5666 20.7265 20.4523 21.3606C17.9081 22.8128 15.0465 23.6109 12.1217 23.6842C11.8412 23.653 11.5601 23.6253 11.2789 23.5977C10.6592 23.537 10.0184 23.474 9.39752 23.3721C7.85435 23.1382 6.45212 22.3376 5.4615 21.125C4.25422 19.7091 3.38261 18.0359 2.91245 16.2317C2.37324 14.1405 2.56975 11.9261 3.46872 9.96391C4.47236 7.72272 5.80538 6.06914 7.54414 4.9088C8.93548 3.9805 10.2039 3.50306 11.5356 3.40679C11.9184 3.37916 12.3006 3.34643 12.6829 3.31389H12.6836Z" fill="white"/>
    </svg>
)

const bell = (
    <svg width="46" height="45" viewBox="0 0 46 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M29.0131 38.2297C28.6951 40.3505 28.0681 42.3022 26.1916 43.576C24.9158 44.4686 23.3785 44.912 21.8221 44.836C18.2575 44.6681 16.0202 42.6994 15.2578 38.9814C14.951 38.9814 14.6173 38.9718 14.2841 38.9831C10.5654 39.1106 6.84725 39.2478 3.12817 39.3613C2.59285 39.3762 2.05774 39.3261 1.53448 39.2125C1.16864 39.1255 0.82677 38.9584 0.533833 38.7232C0.421624 38.646 0.33032 38.5426 0.26808 38.4216C0.205838 38.3008 0.174621 38.1663 0.177212 38.0306C0.179803 37.8946 0.216172 37.7615 0.282977 37.6432C0.34978 37.5248 0.444957 37.4248 0.56002 37.352C3.41609 35.3684 4.56634 32.3526 5.51672 29.227C6.27342 26.738 6.43132 24.1598 6.51394 21.5778C6.61798 18.3178 7.14578 15.1561 8.36469 12.0983C9.952 8.11582 12.8308 5.55763 16.7978 4.13332C17.3651 3.92969 17.6408 3.68277 17.7587 3.06506C18.14 1.06692 19.3765 0.0966336 21.4038 0.0849109C23.3827 0.0743227 24.915 1.23179 25.2961 3.10855C25.3217 3.33489 25.4138 3.54866 25.5609 3.72286C25.7079 3.89705 25.9035 4.02394 26.1226 4.08743C29.1761 5.25384 31.4936 7.27712 33.1899 10.0718C35.46 13.8118 36.814 17.8617 37.5552 22.1465C37.7962 23.5396 38.1307 24.9165 38.4115 26.3028C39.0782 29.5927 40.8344 32.115 43.6815 33.9163C44.2 34.2583 44.6266 34.7218 44.924 35.2663C45.3359 36.0239 45.0172 36.8205 44.193 37.0973C43.4198 37.352 42.6159 37.5023 41.8028 37.5445C37.8354 37.7604 33.8655 37.9243 29.8966 38.1117C29.6197 38.1261 29.3444 38.1847 29.0131 38.2297ZM34.4304 24.4447C34.4986 24.2729 34.5471 24.2118 34.5399 24.1587C34.4669 23.6293 34.383 23.1023 34.3055 22.5738C33.7305 18.65 32.5789 14.9307 30.5445 11.4903C28.1535 7.44653 24.0253 5.4508 19.4216 6.35099C16.0541 7.00935 13.2868 8.67819 11.7087 11.8363C11.0131 13.2292 10.3821 14.7247 10.1119 16.2427C9.6732 18.7081 9.54475 21.2291 9.30863 23.7289C9.22998 24.5608 9.22293 25.3996 9.17593 26.3909C17.6806 25.7331 26.0998 25.3283 34.4304 24.4447ZM5.41365 36.5363C16.6347 35.7439 27.6413 35.5121 38.7722 34.3067C36.7839 32.2623 35.9127 29.8498 35.2032 27.3932L8.92203 28.4142C8.58224 31.3243 7.45104 34.0091 5.41365 36.5363ZM17.3075 38.8185C17.7718 41.0433 19.8469 42.4045 22.2458 42.1551C24.4316 41.9282 25.707 40.5871 25.7276 38.3558L17.3075 38.8185ZM19.6194 3.25571H22.809C22.3673 2.37878 21.6733 2.25928 20.9452 2.28329C20.321 2.30409 19.7872 2.52493 19.62 3.25571H19.6194Z" fill="white"/>
    </svg>
)

const messages = (
    <svg width="45" height="40" viewBox="0 0 45 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <path d="M6.96942 30.3201C7.66116 30.7927 7.75172 31.1361 7.39042 31.9181C6.63455 33.5546 5.76262 35.4941 5.02671 37.4775C4.83063 38.0056 4.81658 39.0373 5.24072 39.4515C5.58779 39.7907 6.17659 39.8372 6.74599 39.8819C6.91435 39.8952 7.07329 39.9077 7.22298 39.9275C7.24719 39.9308 7.27157 39.9323 7.29598 39.9323C7.50308 39.9125 7.70252 39.844 7.87776 39.7323L7.95168 39.6936C8.57573 39.3717 9.20038 39.0508 9.82565 38.7308C11.6104 37.8158 13.4557 36.869 15.2526 35.9033L15.2694 35.8945C17.4317 34.7332 19.4722 33.6357 21.978 34.1181C22.0826 34.1347 22.1887 34.1389 22.2944 34.1302C22.3279 34.1286 22.3617 34.1271 22.3948 34.1267C28.3479 34.0727 32.935 32.8403 36.831 30.2486C42.7979 26.2786 45.4771 20.5973 44.1816 14.6615C42.9822 9.16565 40.6171 5.74602 36.5136 3.57404C32.3418 1.3663 27.6406 0.0977434 23.2763 0.0020752C23.2747 0.00235048 23.273 0.00235048 23.2715 0.0020752C17.8846 0.0232734 13.3842 0.908474 9.10877 2.78847C3.92599 5.06699 1.08418 8.34054 0.421266 12.796C0.13551 14.6085 0.101424 16.4515 0.319985 18.2732C1.0376 23.813 3.21281 27.7535 6.96942 30.3201ZM8.79404 34.7994C9.15442 33.5172 9.49447 32.3061 9.91861 31.1459C10.5839 29.3275 9.60203 28.3057 8.67299 27.6187C7.25994 26.5743 5.83063 25.3719 4.94613 23.6628C2.66189 19.2489 2.35104 15.1142 3.9951 11.0222C4.88681 8.80303 6.69701 7.15533 9.69185 5.83662C13.8255 4.01652 17.9397 3.10655 22.0072 3.10655C26.057 3.12454 30.0559 4.00852 33.7343 5.69872C37.9812 7.6071 40.3364 10.7546 41.1464 15.6044C41.8118 19.5842 40.706 22.8991 37.6687 26.0359C34.9638 28.829 31.317 30.4727 26.1921 31.2084C23.609 31.5793 20.5537 31.8866 17.4788 31.3533C17.0949 31.2882 16.6656 31.528 16.3184 31.7219C14.2369 32.8888 12.1749 34.0589 9.99216 35.298L8.3956 36.2038C8.53494 35.7216 8.66616 35.2547 8.79404 34.7995V34.7994Z" fill="white"/>
            <path d="M14.0979 19.7763H14.1236C14.4136 19.7754 14.7005 19.7166 14.9675 19.6036C15.2345 19.4904 15.4762 19.3254 15.6784 19.1181C15.8521 18.9393 15.9877 18.7271 16.077 18.4947C16.1663 18.2621 16.2074 18.014 16.1979 17.7653C16.1651 17.2582 15.9457 16.7811 15.5817 16.4256C15.2178 16.0701 14.7349 15.8612 14.226 15.8391C13.9556 15.8408 13.6882 15.8961 13.4394 16.0017C13.1905 16.1072 12.9652 16.2608 12.7763 16.4539C12.5705 16.6501 12.4055 16.8849 12.291 17.1449C12.1764 17.4049 12.1145 17.6851 12.1088 17.969C12.1073 18.1998 12.152 18.4284 12.2403 18.6417C12.3285 18.855 12.4586 19.0484 12.6229 19.211C13.0202 19.5866 13.5506 19.79 14.0979 19.7763Z" fill="white"/>
            <path d="M22.8507 20.2877H22.8692C23.3707 20.2837 23.8503 20.0822 24.2037 19.7272C24.5753 19.3668 24.7895 18.8747 24.7997 18.3577C24.8039 17.8416 24.5175 17.2314 24.0521 16.7659C23.7367 16.4128 23.2966 16.1949 22.8239 16.1577H22.818C21.8634 16.1632 20.913 17.2072 20.8991 18.2652C20.8943 18.5298 20.9423 18.7926 21.0405 19.0383C21.1384 19.2842 21.2844 19.5082 21.4702 19.6971C21.6496 19.8818 21.864 20.0291 22.1009 20.1305C22.338 20.2319 22.5927 20.2853 22.8507 20.2877Z" fill="white"/>
            <path d="M31.1828 20.0738H31.195C31.6705 20.0556 32.1231 19.8646 32.4674 19.5371C32.8119 19.2093 33.0245 18.7675 33.0653 18.2945C33.0524 17.8271 32.8557 17.3835 32.5177 17.0595C32.0631 16.5544 31.4321 16.2416 30.7541 16.185C30.582 16.1816 30.4113 16.2133 30.2519 16.2779C30.0926 16.3425 29.9483 16.4386 29.8274 16.5607C29.6373 16.7557 29.4878 16.9865 29.388 17.2397C29.2882 17.4929 29.2397 17.7633 29.2458 18.0353C29.2342 18.5612 29.4312 19.0701 29.794 19.4519C30.1566 19.8335 30.6558 20.0572 31.1828 20.0738Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="44.539" height="40" fill="white"/>
            </clipPath>
        </defs>
    </svg>
)

const menu = (
    <svg width="50" height="30" viewBox="0 0 50 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.0374073 27.8437C-0.0885704 28.5264 0.5791 29.3053 1.49502 29.5448C1.97456 29.6702 2.47161 29.7424 2.97349 29.7595C3.39249 29.7724 3.81148 29.7878 4.23048 29.8038C5.2112 29.8401 6.21545 29.8776 7.21936 29.8776C7.62271 29.8776 8.02601 29.8715 8.42712 29.8568C10.3799 29.7864 12.3626 29.6814 14.2799 29.58C16.5766 29.4588 18.9511 29.3336 21.2872 29.2657C27.3687 29.0892 33.4735 28.3872 39.3774 27.7085L40.1433 27.6203C41.5274 27.4617 42.9587 27.2971 44.3542 27.0649C44.4159 27.0548 44.4796 27.0457 44.5444 27.0365C45.1051 26.9564 45.952 26.8357 46.1701 25.7554C46.1819 25.6968 46.1676 25.6368 46.1299 25.5867C46.0922 25.5365 46.0338 25.4997 45.9657 25.4835C45.819 25.4484 45.6833 25.4097 45.5545 25.3729C45.2908 25.286 45.014 25.2293 44.7322 25.2046L43.8425 25.1606C41.79 25.0589 39.6676 24.9539 37.576 24.907C31.6489 24.771 25.7173 24.9004 19.8065 25.2944C15.9987 25.5522 12.1216 25.7632 8.37187 25.9673C6.47243 26.0707 4.57288 26.1761 2.67344 26.2837C2.26781 26.2987 1.86614 26.3568 1.47797 26.4567C1.10466 26.5476 0.770446 26.7267 0.515049 26.9728C0.259655 27.2186 0.0937863 27.521 0.0374073 27.8437Z" fill="white"/>
        <path d="M1.05403 15.583C1.04477 15.8385 1.12202 16.0909 1.27676 16.3111C1.43149 16.5313 1.65736 16.7102 1.9283 16.827C2.38851 17.0167 2.8887 17.1286 3.40038 17.1563C4.07887 17.1912 4.79085 17.2212 5.51376 17.2212C5.86739 17.2212 6.22337 17.214 6.57923 17.1966C8.70214 17.0944 10.8569 16.9735 12.9418 16.8568C16.8448 16.6384 20.8806 16.4115 24.8524 16.2974C30.259 16.1413 35.6948 15.5842 40.9515 15.0453C42.3297 14.9047 43.7068 14.7658 45.0833 14.6288C45.1928 14.6183 45.304 14.6096 45.4168 14.601C46.2224 14.5388 47.2255 14.4615 48.2492 13.5416C48.2808 13.5131 48.304 13.4785 48.316 13.4409C48.3283 13.4033 48.3297 13.3639 48.3196 13.3259C48.3098 13.2878 48.2889 13.2523 48.259 13.2225C48.2294 13.1926 48.1914 13.1692 48.1484 13.1544C46.2783 12.5089 44.661 12.4205 43.0316 12.3809L41.6096 12.3465C37.1057 12.2365 32.4492 12.1229 27.8504 12.2712C20.1203 12.5211 12.5502 13.1523 4.16499 13.8906C3.37675 13.9628 2.60847 14.1454 1.89229 14.431C1.63726 14.5371 1.42318 14.7016 1.27485 14.9054C1.12651 15.1093 1.04998 15.3442 1.05403 15.583Z" fill="white"/>
        <path d="M2.64498 3.364C3.19014 3.58713 3.7798 3.72344 4.38425 3.76598C4.71573 3.7866 5.04737 3.80786 5.37922 3.82973C6.91078 3.9291 8.49045 4.03171 10.0553 4.03171C10.1762 4.03171 10.2974 4.03176 10.4183 4.02988C13.3764 3.99871 16.3829 3.9408 19.2905 3.88478C23.148 3.81072 27.1371 3.73406 31.0594 3.71882C36.6739 3.69702 42.3142 3.15843 47.7692 2.63765L47.9441 2.62106C48.2879 2.56577 48.6164 2.45727 48.913 2.30114C49.1116 2.21301 49.3368 2.11362 49.6133 2.00628C49.6628 1.98722 49.7047 1.95677 49.7343 1.9185C49.7639 1.88024 49.7798 1.83572 49.7804 1.7901C49.7812 1.74449 49.7664 1.69966 49.7379 1.66084C49.7091 1.62202 49.6681 1.59077 49.6192 1.57078C49.3343 1.45359 49.0946 1.3411 48.8832 1.24079C48.5513 1.05342 48.1787 0.923165 47.7862 0.85758L46.7144 0.749318C44.6323 0.53838 42.4792 0.319223 40.3488 0.244692C28.8703 -0.157496 17.215 0.220105 5.94374 0.585497L3.92092 0.650899C3.615 0.661007 3.31109 0.697195 3.01391 0.758932C2.67396 0.812651 2.36337 0.955994 2.12724 1.16812C1.89111 1.38024 1.74172 1.65006 1.70101 1.9383C1.64864 2.23004 1.7129 2.52813 1.88364 2.78603C2.05438 3.04394 2.32211 3.24716 2.64498 3.364Z" fill="white"/>
    </svg>

)


const logout = (
    <svg width="36" height="40" viewBox="0 0 36 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0)">
            <path d="M10.2683 18.7679C9.23985 18.8217 8.21139 18.8735 7.18299 18.9239C7.12426 18.9267 7.06521 18.9282 7.00615 18.9297C6.83103 18.9297 6.65619 18.944 6.4834 18.9725C5.93402 19.0788 5.65627 19.3877 5.72095 19.8179C5.76016 20.0771 5.97968 20.5013 6.27447 20.5906C6.8777 20.7838 7.50339 20.8977 8.13584 20.9292C9.24552 20.9666 10.4353 20.9616 11.8789 20.9135C15.8445 20.7815 19.8099 20.6447 23.7754 20.503C25.9132 20.4281 28.0511 20.3535 30.1891 20.2791C30.4372 20.2701 30.6907 20.2721 31.0109 20.2746L31.2078 20.276C31.0486 20.4393 30.8948 20.5964 30.7464 20.748C30.2367 21.2691 29.7965 21.7193 29.3568 22.188C28.9396 22.6328 28.5241 23.0919 28.1221 23.5359C27.8463 23.8406 27.5697 24.1448 27.2922 24.4487C26.8438 24.9359 26.3921 25.4199 25.9436 25.9002L25.3481 26.538C25.3236 26.5644 25.3082 26.5979 25.3039 26.6338C25.2996 26.6696 25.3065 26.7057 25.3241 26.7372L25.6278 27.2788C25.6425 27.305 25.664 27.3272 25.6902 27.3423C25.7161 27.3576 25.7457 27.3656 25.7759 27.3656C25.7955 27.3656 25.8152 27.3623 25.8338 27.3556C25.889 27.3355 25.9441 27.3193 25.9972 27.3037C26.1252 27.2733 26.2477 27.2223 26.3595 27.153C29.3396 25.0793 32.195 22.831 34.911 20.4195C35.178 20.1877 35.4147 19.9231 35.6157 19.6318C36.0587 18.9785 35.955 18.2708 35.3383 17.741C35.1808 17.6125 35.0134 17.4967 34.8376 17.395L33.8591 16.7895C31.8826 15.5653 29.8392 14.2999 27.823 13.0632C27.5262 12.8549 27.1899 12.71 26.8351 12.6374C26.6706 12.6261 26.5057 12.6537 26.3537 12.7178C26.2017 12.7819 26.0667 12.8808 25.9595 13.0066C25.7982 13.2413 25.7557 13.7368 25.9362 13.979C26.2485 14.403 26.6293 14.7715 27.0629 15.0693C27.7706 15.5469 28.5021 16.0141 29.2078 16.4657C29.8139 16.853 30.4407 17.2537 31.0491 17.6585C31.1649 17.7359 31.2897 17.8039 31.4098 17.8696C31.706 18.0024 31.9663 18.2041 32.1692 18.4579C31.9732 18.4398 31.7797 18.4203 31.5879 18.4008C30.9729 18.3274 30.3545 18.2871 29.7352 18.2803L29.2481 18.2841C25.3482 18.3146 21.3155 18.3462 17.3504 18.4562C14.9886 18.5219 12.5889 18.6469 10.2683 18.7679Z" fill="white"/>
            <path d="M15.6198 0.507008C15.1236 0.435804 8.79867 0.0651441 5.09032 0.0452271C4.56575 0.0727789 3.98097 0.117158 3.41555 0.160145C3.00049 0.19168 2.59007 0.222956 2.20959 0.247023C1.23258 0.308931 0.622826 0.865788 0.446151 1.85798C0.347255 2.48087 0.288631 3.10948 0.270638 3.73996C0.0332516 8.80419 0.086676 13.9521 0.138289 18.931C0.150641 20.1149 0.161671 21.2989 0.171375 22.4828C0.190565 25.133 0.247637 27.9193 0.3459 31.0012C0.39073 32.4042 0.466165 33.8286 0.539283 35.2062C0.585106 36.071 0.63093 36.9359 0.669806 37.801C0.719433 38.8906 1.14491 39.4608 2.09462 39.7069C2.63141 39.8259 3.179 39.889 3.7287 39.8949L3.97353 39.9064C4.65177 39.9396 5.42795 39.9549 6.25971 39.9549C9.80132 39.9549 14.3342 39.6925 16.3982 39.5597C16.6597 39.5429 16.9052 39.4269 17.0841 39.235C17.2633 39.043 17.3627 38.7896 17.3621 38.5266C17.3614 38.2637 17.2607 38.011 17.0805 37.8199C16.9005 37.6289 16.6545 37.514 16.3929 37.4988C15.0243 37.4181 12.5039 37.2664 11 37.1607C9.59222 37.0611 8.15947 36.9985 6.77369 36.9386C5.9775 36.9042 5.1813 36.8697 4.38544 36.8281C4.12866 36.8098 3.87305 36.7778 3.61968 36.7321C3.53399 36.7183 3.44764 36.7044 3.36013 36.6913C3.34855 36.6196 3.3368 36.5509 3.32555 36.4847C3.29029 36.3016 3.26542 36.1165 3.25111 35.9305C3.19553 34.9252 3.13118 33.9034 3.06914 32.9152C2.92026 30.5623 2.76691 28.1291 2.72373 25.7361C2.65029 21.6805 2.65756 17.5547 2.666 13.5646C2.66843 12.2859 2.67002 11.0072 2.6708 9.72835C2.6708 7.8062 2.71017 5.89688 2.74855 4.28261C2.75814 3.87813 2.80082 3.47645 2.85012 3.01106C2.86997 2.82434 2.89065 2.62935 2.91033 2.42172C3.48734 2.38254 4.68039 2.35398 6.15765 2.31896C9.94061 2.229 15.1216 2.1055 16.0811 1.66235C16.1035 1.65197 16.1234 1.63683 16.1394 1.61794C16.1554 1.59905 16.1671 1.577 16.1737 1.5531C16.2191 1.43052 16.2376 1.29938 16.2278 1.16896C16.2179 1.03854 16.1801 0.911806 16.1168 0.797464C16.06 0.715702 15.9861 0.647454 15.9003 0.597288C15.8145 0.547124 15.7187 0.516246 15.6198 0.507008Z" fill="white"/>
        </g>
        <defs>
            <clipPath id="clip0">
                <rect width="35.8974" height="40" fill="white"/>
            </clipPath>
        </defs>
    </svg>

)