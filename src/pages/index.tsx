import { Icons } from "@/components/icons";
import * as React from "react";
import { App } from '@capacitor/app';
import { CapacitorUpdater } from '@capgo/capacitor-updater'

CapacitorUpdater.notifyAppReady()

interface IIndexProps { }

App.addListener('backButton', ({ canGoBack }) => {
  if (!canGoBack) {
    App.exitApp();
  } else {
    window.history.back();
  }
});

const Index: React.FunctionComponent<IIndexProps> = () => {
  const [updating, setUpdating] = React.useState(false);

  const checkForUpdate = async () => {
    try {
      setUpdating(true);
      const version = await CapacitorUpdater.download({
        url: 'http://192.168.124.14:8000/dist.zip',
        version: '1.0.0'
      });
      await CapacitorUpdater.set(version);
    } catch (error) {
      console.error('更新失败:', error);
    } finally {
      setUpdating(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gradient-to-r from-red-200 to-purple-400">
      <p className="text-center mb-8">
        开始编辑&nbsp;
        <code className="font-mono font-bold">src/pages/index.tsx</code>
        <Icons.edit className="inline-block size-4 ml-2" />
      </p>
      <button 
        onClick={checkForUpdate}
        disabled={updating}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400"
      >
        {updating ? '正在更新...' : '检查更新'}
      </button>
    </main>
  );
};

export default Index;
