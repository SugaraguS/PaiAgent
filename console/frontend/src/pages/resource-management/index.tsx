import React, { Suspense, JSX } from 'react';
import { Spin } from 'antd';
import { Routes, Route } from 'react-router-dom';

const PluginPage = React.lazy(() => import('./plugin-page'));
const PluginDetail = React.lazy(() => import('./plugin-detail'));
const PluginCreate = React.lazy(() => import('./plugin-create'));
function ResourceManagement(): JSX.Element {
  return (
    <div className="w-full h-full overflow-hidden">
      <Suspense
        fallback={
          <div className="flex items-center justify-center w-full h-full">
            <Spin />
          </div>
        }
      >
        <Routes>
          <Route path="/plugin" element={<PluginPage />} />
          <Route path="/plugin/detail/*" element={<PluginDetail />} />
          <Route path="/plugin/create" element={<PluginCreate />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default ResourceManagement;
