## mobxの勉強

- [x] [今から始めるReact入門 〜 Mobx 編](https://qiita.com/TsutomuNakamura/items/f10491060f0f1640afd9)

```検証用
store.filter = "milk";
store.todos[0] = "buy cheese";
```

### まとめ

```
MobX とReact を接続するとstate を変更するだけで簡単に自動的に且つリアルタイムに画面の描写を変更することができる。

@computed デコレータを使って作成されたメソッド内で値を算出したら、
filterを通過したものがあった場合のみ必要に応じて処理を起動(lazy load) してstate を変更、画面描写することができる

```