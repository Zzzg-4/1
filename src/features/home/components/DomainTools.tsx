import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

const tools = [
  {
    name: 'amss-Intel',
    badge: 'OSINT',
    desc: '情报收集与ASN枚举功能用于全面网络范围侦查。',
    stats: [
      { label: '发现关联资产: 3个 (IP 203.0.113.5、域名 dev.target.co)', color: 'secondary' },
      { label: '威胁情报: 1个中危告警 (过期SSL证书)', color: 'tertiary' },
    ],
  },
  {
    name: 'CRT',
    badge: 'CERTIFICATE',
    desc: '用于网络情报发现的OSINT工具,追踪SSL证书透明度日志。',
    extra: '- 近期新证书: 2025-06-10 颁发 *.newapi.target.com',
  },
];

export default function DomainTools() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const HistoryModal = () => <div className="p-4 text-on-surface-variant">历史记录内容占位</div>;
  const ScanModal = () => <div className="p-4 text-on-surface-variant">扫描进度占位</div>;
  const ResultsModal = () => <div className="p-4 text-on-surface-variant">扫描结果占位</div>;

  return (
    <>
      {/* 修复点：移除了未使用的 idx 参数 */}
      {tools.map((tool) => (
        <div key={tool.name} className="glass-card rounded-xl p-6 hover:shadow-2xl transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <h3 className="font-headline-md text-headline-md text-on-surface">{tool.name}</h3>
            <span className={`bg-${tool.badge === 'OSINT' ? 'primary' : 'secondary'}/10 text-${tool.badge === 'OSINT' ? 'primary' : 'secondary'} text-[10px] px-2 py-0.5 rounded border border-${tool.badge === 'OSINT' ? 'primary' : 'secondary'}/20`}>
              {tool.badge}
            </span>
          </div>
          <p className="text-xs text-on-surface-variant mb-6 h-10 overflow-hidden">{tool.desc}</p>
          <div className="bg-surface-dim/50 rounded-lg p-4 mb-6 text-xs font-data-mono border border-outline-variant/30">
            {tool.stats ? (
              tool.stats.map((stat, i) => (
                <p key={i} className={`text-${stat.color} mb-1 flex items-center gap-2`}>
                  <span className={`w-1.5 h-1.5 rounded-full bg-${stat.color}`} />
                  {stat.label}
                </p>
              ))
            ) : (
              <p className="italic text-outline">{tool.extra}</p>
            )}
          </div>
          <div className="grid grid-cols-3 gap-2">
            <button
              onClick={() => openModal('历史记录', <HistoryModal />)}
              className="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all"
            >
              历史记录
            </button>
            <button
              onClick={() => openModal('扫描', <ScanModal />)}
              className="bg-surface-container-highest py-2 rounded text-xs hover:bg-primary hover:text-on-primary transition-all"
            >
              扫描
            </button>
            <button
              onClick={() => openModal('结果', <ResultsModal />)}
              className="bg-secondary text-on-secondary py-2 rounded text-xs hover:opacity-90 font-bold transition-all"
            >
              结果
            </button>
          </div>
        </div>
      ))}
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="lg">
        {modalContent.content}
      </Modal>
    </>
  );
}