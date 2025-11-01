document.addEventListener('DOMContentLoaded', function() {
    // 查找所有blockquote元素
    const blockquotes = document.querySelectorAll('blockquote');
    
    blockquotes.forEach(blockquote => {
        // 获取blockquote的文本内容
        let content = blockquote.innerHTML;
        
        // 检查内容是否以[!NOTE]等开头（包括可能的段落标签）
        const match = content.match(/(?:<p>)?\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]([^\n<]+)(?:<\/p>)?([\s\S]*)/i);
        
        if (match) {
            const type = match[1].toLowerCase();
            const title = match[2].trim();
            const remainingContent = match[3] ? match[3].trim() : '';
            
            // 创建标题元素
            const titleElement = document.createElement('strong');
            titleElement.className = `callout-title callout-title-${type}`;
            titleElement.textContent = title;
            
            // 创建标题容器
            const titleContainer = document.createElement('div');
            titleContainer.className = 'callout-header';
            titleContainer.appendChild(titleElement);
            
            // 创建内容容器
            const contentContainer = document.createElement('div');
            contentContainer.className = 'callout-content';
            contentContainer.innerHTML = remainingContent;
            
            // 清理和重组内容
            blockquote.innerHTML = '';
            blockquote.appendChild(titleContainer);
            blockquote.appendChild(contentContainer);
            
            // 添加类
            blockquote.className = `callout callout-${type}`;
        }
    });
});