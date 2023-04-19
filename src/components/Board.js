import axios from 'axios';
import React, { useEffect } from 'react';

function App() {
    // postman으로는 잘 됨
    // Access-Control-Allow-Origin => CORS 문제 => 같은 서버가 아니면 rest 자료를 받을 수 없다.
    // => src폴더의 setupProxy.js로 해결

    // 함수 생성
    // async function selectList( ) { }
    const selectList = async() => {
        const url = `/web02/api/board/select.json?page=1`;
        const headers = {"Content-Type" : "application/json"};
        const {data} = await axios.get(url, {headers});

        console.log(data);
    }

    // 화면이 로딩될때
    useEffect( () => {
        selectList(); // 함수 호출하기
    }, [])

    return (
        <div>
            <h3>Board</h3>
        </div>
    );
}

export default App;