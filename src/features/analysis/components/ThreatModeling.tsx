import { useModal } from '../../../shared/hooks/useModal';
import Modal from '../../../shared/components/Modal';

export default function ThreatModeling() {
  const { isOpen, openModal, closeModal, modalContent } = useModal();

  const ThreatLevelModal = () => (
    <table className="w-full text-xs text-left border-collapse">
      <thead className="bg-white/5 text-primary">
        <tr>
          <th className="p-3 border border-white/10">等级</th>
          <th className="p-3 border border-white/10">描述</th>
          <th className="p-3 border border-white/10">响应时间</th>
        </tr>
      </thead>
      <tbody className="text-slate-300">
        <tr>
          <td className="p-3 border border-white/10 text-red-500 font-bold">P0 - 紧急</td>
          <td className="p-3 border border-white/10">系统核心功能受损，数据泄露</td>
          <td className="p-3 border border-white/10">&lt; 1小时</td>
        </tr>
        <tr>
          <td className="p-3 border border-white/10 text-orange-500">P1 - 高危</td>
          <td className="p-3 border border-white/10">非关键业务受损，特权提升风险</td>
          <td className="p-3 border border-white/10">&lt; 4小时</td>
        </tr>
        <tr>
          <td className="p-3 border border-white/10 text-yellow-500">P2 - 中危</td>
          <td className="p-3 border border-white/10">敏感信息暴露，局部拒绝服务</td>
          <td className="p-3 border border-white/10">24小时内</td>
        </tr>
      </tbody>
    </table>
  );

  const GenericModal = (type: string) => (
    <div className="p-4 bg-white/5 border border-white/10 rounded-lg">
      <p className="mb-4">详细分析 [{type}] 的相关评估参数：</p>
      <ul className="space-y-3 text-xs list-disc pl-5 text-slate-300">
        <li><strong>评估基准：</strong> 基于业界通用的 CVSS v3.1 评分系统。</li>
        <li><strong>探测逻辑：</strong> 结合静态代码分析 (SAST) 与动态应用扫描 (DAST)。</li>
        <li><strong>覆盖范围：</strong> 当前项目全量 API 与逻辑鉴权点。</li>
        <li><strong>实时状态：</strong> 数据每 15 分钟自动从扫描引擎同步一次。</li>
      </ul>
    </div>
  );

  const buttons = [
    { label: '威胁等级', content: <ThreatLevelModal /> },
    { label: 'STRIDE类别', content: GenericModal('STRIDE类别') },
    { label: '探测状态', content: GenericModal('探测状态') },
    { label: '安全控制', content: GenericModal('安全控制') },
    { label: '汇总分析', content: GenericModal('汇总分析') },
  ];

  return (
    <>
      <div className="glass-panel rounded-xl p-8 border-primary/20 bg-surface-container-high/50 backdrop-blur-sm">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white tracking-tight">威胁建模分析</h2>
          <p className="text-primary text-sm mt-1 uppercase tracking-widest font-label-caps">Threat Modeling Analysis</p>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-on-surface-variant text-sm text-center mb-8 leading-relaxed">
            运用STRIDE方法进行全面的威胁建模，以识别六大类别中的安全威胁。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
            {[
              '欺骗行为 (Spoofing)', '篡改 (Tampering)', '否认 (Repudiation)',
              '信息披露 (Information Disclosure)', '服务中断 (Denial of Service)', '特权提升 (Elevation of Privilege)',
            ].map((item) => (
              <div key={item} className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-primary font-medium">{item.split(' ')[0]}</span>
                <span className="text-on-surface-variant text-xs">{item.split(' ').slice(1).join(' ')}</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {buttons.map((btn) => (
              <button
                key={btn.label}
                onClick={() => openModal(btn.label, btn.content)}
                className="bg-surface-container-highest hover:bg-primary-container/20 hover:border-primary/50 text-on-surface py-3 rounded-lg border border-outline-variant transition text-xs font-bold font-label-caps"
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={closeModal} title={modalContent.title} maxWidth="2xl">
        {modalContent.content}
      </Modal>
    </>
  );
}