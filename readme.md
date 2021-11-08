# @grotesq/use-watch

## 개요

```js
useEffect( () => {
    console.log( value );
}, [ value ] );
```

위 코드를 짧게 사용하려고 만들었습니다.

추가로 NODE_ENV가 production 일 때는 코드를 실행하지 않습니다.  
프로덕션 배포를 위해 콘솔을 삭제하지 않아도 됩니다.

## 설치

```shell
npm i @grotesq/use-watch
```

## 사용법

```js
import useWatch from '@grotesq/use-watch';

function Component() {
    const [count, setCount] = useState(0);
    useWatch( [ 'count', count ] );
    
    return <button onClick={() => setCount( count + 1 )}>Add</button>
}
```
