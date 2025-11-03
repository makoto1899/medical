// このオプションのコードは、プログレッシブウェブアプリ (PWA) に
// サービスワーカーを登録するために使用されます。

// register() はデフォルトではなく、 opt-in です。
// 詳細はこちら: https://cra.link/PWA

const isLocalhost = Boolean(
  window.location.hostname === 'localhost' ||
    // [::1] は IPv6 localhost アドレスです。
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 はIPv4 localhost とみなされます。
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
);

export function register(config) {
  if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
    // URLコンストラクタは、SW がサポートされているすべてのブラウザで利用可能です。
    const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
    if (publicUrl.origin !== window.location.origin) {
      // PUBLIC_URLが異なるオリジンにある場合、サービスワーカーは動作しません
      // 同一オリジンポリシーのため。
      return;
    }

    window.addEventListener('load', () => {
      const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;

      if (isLocalhost) {
        // これはlocalhostで実行されています。既存のサービスワーカーが存在するかチェックします。
        checkValidServiceWorker(swUrl, config);

        // localhost で実行されている開発者に追加のログを表示します。
        navigator.serviceWorker.ready.then(() => {
          console.log(
            'このウェブアプリはサービスワーカーによってキャッシュファーストで提供されています。' +
              '詳細: https://cra.link/PWA'
          );
        });
      } else {
        // localhostではありません。サービスワーカーを登録します。
        registerValidSW(swUrl, config);
      }
    });
  }
}

function registerValidSW(swUrl, config) {
  navigator.serviceWorker
    .register(swUrl)
    .then((registration) => {
      registration.onupdatefound = () => {
        const installingWorker = registration.installing;
        if (installingWorker == null) {
          return;
        }
        installingWorker.onstatechange = () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // この時点で、更新されたプリキャッシュされたコンテンツがフェッチされていますが、
              // 以前のサービスワーカーは、すべてのクライアントタブが閉じられるまで
              // 古いコンテンツを提供し続けます。
              console.log(
                '新しいコンテンツが利用可能です。すべてのタブを閉じると表示されます。' +
                  '詳細: https://cra.link/PWA'
              );

              // オプションのコールバックを実行します
              if (config && config.onUpdate) {
                config.onUpdate(registration);
              }
            } else {
              // この時点で、すべてがプリキャッシュされました。
              // "Content is cached for offline use." メッセージを表示するのに最適です。
              console.log('コンテンツはオフライン使用のためにキャッシュされました。');

              // オプションのコールバックを実行します
              if (config && config.onSuccess) {
                config.onSuccess(registration);
              }
            }
          }
        };
      };
    })
    .catch((error) => {
      console.error('サービスワーカー登録中にエラーが発生しました:', error);
    });
}

function checkValidServiceWorker(swUrl, config) {
  // サービスワーカーが見つかるかチェックします。見つからない場合はページをリロードします。
  fetch(swUrl, {
    headers: { 'Service-Worker': 'script' },
  })
    .then((response) => {
      // サービスワーカーが存在し、実際にJSファイルを取得していることを確認します。
      const contentType = response.headers.get('content-type');
      if (
        response.status === 404 ||
        (contentType != null && contentType.indexOf('javascript') === -1)
      ) {
        // サービスワーカーが見つかりません。おそらく別のアプリです。ページをリロードします。
        navigator.serviceWorker.ready.then((registration) => {
          registration.unregister().then(() => {
            window.location.reload();
          });
        });
      } else {
        // サービスワーカーが見つかりました。通常通り続行します。
        registerValidSW(swUrl, config);
      }
    })
    .catch(() => {
      console.log('インターネット接続が見つかりません。アプリはオフラインモードで実行されています。');
    });
}

export function unregister() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.ready
      .then((registration) => {
        registration.unregister();
      })
      .catch((error) => {
        console.error(error.message);
      });
  }
}

