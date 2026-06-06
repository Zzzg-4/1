import AmassHero from '../features/subdomains/components/AmassHero';
import SubdomainTools from '../features/subdomains/components/SubdomainTools';
import UtilityTools from '../features/subdomains/components/UtilityTools';

export default function SubdomainsPage() {
  return (
    <div className="max-w-container-max mx-auto px-gutter py-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md mb-xl">
        <div className="flex gap-sm">
          <button className="bg-surface-container px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant">
            公司分析模块
          </button>
          <button className="bg-primary text-on-primary px-md py-xs rounded-full font-label-caps text-label-caps">
            子域名收集模块
          </button>
          <button className="bg-surface-container px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant">
            网站分析模块
          </button>
          <button className="bg-surface-container px-md py-xs rounded-full font-label-caps text-label-caps text-on-surface-variant">
            智能对话
          </button>
        </div>
        <div className="flex gap-sm">
          <button className="bg-surface-container-high border border-outline-variant px-lg py-xs rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors">
            添加目标
          </button>
          <button className="bg-surface-container-high border border-outline-variant px-lg py-xs rounded-lg font-label-caps text-label-caps hover:bg-surface-variant transition-colors">
            选择有效目标
          </button>
        </div>
      </div>
      <AmassHero />
      <SubdomainTools />
      <UtilityTools />
    </div>
  );
}