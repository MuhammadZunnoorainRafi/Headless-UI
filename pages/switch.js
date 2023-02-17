import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Layout from '@/components/Layout';

export default function toggle() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [enabled, setEnabled] = useState(false);

  return (
    <Layout>
      <div className="py-16">
        <Switch
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? 'bg-teal-900' : 'bg-teal-600'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            className={`${enabled ? 'translate-x-[1.8rem]' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </Switch>
      </div>
    </Layout>
  );
}
