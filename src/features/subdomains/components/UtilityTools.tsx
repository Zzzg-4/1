import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

export default function UtilityTools() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const tools = [
    { name: 'alterx', desc: '一款基于模式的子域名生成器', buttons: ['生成', '合并'] },
    { name: 'shuffledns', desc: '一款高速子域名解析与爆破工具', buttons: ['添加字典', '扫描', '扫描结果'] },
    { name: 'gospider', desc: '一款高速、智能的网络爬虫工具', buttons: ['扫描', '结果'] },
    { name: 'dnsx', desc: '一款灵活、快速且高度可扩展的 DNS 工具包', buttons: ['扫描', '结果'] },
  ];

  const bottomTools = [
    { name: 'naabu', stats: ['存活主机：23', '开放端口数：107', '高危端口：34'] },
    { name: 'nmap', stats: ['识别服务：ssh, Apache', '操作系统：Linux'] },
    { name: 'httpx', stats: ['探测域名：342', '存活：280'] },
    { name: 'observer_ward', stats: ['指纹库：11,102', '命中：112'] },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        {tools.map((tool) => (
          <div key={tool.name} className="tool-card p-lg rounded-xl flex flex-col gap-md bg-surface-container-high border border-outline-variant">
            <h2 className="font-headline-md text-headline-md text-center">{tool.name}</h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant text-center">{tool.desc}</p>
            <div className="grid grid-cols-3 gap-sm mt-auto">
              {tool.buttons.map((btn) => (
                <button
                  key={btn}
                  onClick={() => openModal(`${tool.name} - ${btn}`, <div className="p-4">{btn} 内容占位</div>)}
                  className="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary"
                >
                  {btn}
                </button>
              ))}
            </div>
            {tool.name === 'shuffledns' && (
              <button className="bg-surface-container-highest py-xs rounded-lg font-label-caps text-label-caps border border-outline-variant hover:border-primary mt-2">
                合并结果
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-lg mt-lg">
        {bottomTools.map((tool) => (
          <div key={tool.name} className="tool-card p-md rounded-xl flex flex-col gap-sm bg-surface-container-high border border-outline-variant">
            <span className="font-headline-md text-headline-md text-center">{tool.name}</span>
            <div className="flex flex-col gap-1 text-[10px] text-on-surface-variant font-data-mono">
              {tool.stats.map((stat, i) => (
                <span key={i}>{stat}</span>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-xs pt-xs">
              <button onClick={() => openModal(`${tool.name} 扫描`, <div>扫描占位</div>)} className="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary">
                扫描
              </button>
              <button onClick={() => openModal(`${tool.name} 结果`, <div>结果占位</div>)} className="bg-surface-container-highest py-xs rounded-lg text-[10px] font-label-caps border border-outline-variant hover:border-primary">
                结果
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg pt-lg border-t border-outline-variant mt-lg">
        <button className="bg-surface-container-highest py-md rounded-lg font-label-caps text-label-caps border border-outline-variant hover:bg-primary/10 hover:border-primary transition-all flex items-center justify-center gap-md">
          汇总
        </button>
        <button className="bg-surface-container-highest py-md rounded-lg font-label-caps text-label-caps border border-outline-variant hover:bg-secondary/10 hover:border-secondary transition-all flex items-center justify-center gap-md">
          汇总结果
        </button>
      </div>

      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="lg">
        {modalContent.content}
      </Modal>
    </>
  );
}