(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{422:function(v,_,e){"use strict";e.r(_);var a=e(2),t=Object(a.a)({},(function(){var v=this,_=v._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[_("p",[v._v("Java 集合框架包括两种类型的容器，")]),v._v(" "),_("ol",[_("li",[v._v("一种是集合（Collection），存储一个元素集合；")]),v._v(" "),_("li",[v._v("一种是图（Map），存储键/值对映射。")])]),v._v(" "),_("p",[v._v("Collection 接口有 3 种子类型，")]),v._v(" "),_("ol",[_("li",[v._v("List：ArrayList、LinkedList")]),v._v(" "),_("li",[v._v("Set：HashSet（基于 "),_("code",[v._v("HashMap")]),v._v(" 实现）、LinkedHashSet（基于 "),_("code",[v._v("LinkedHashMap")]),v._v(" 实现）、TreeSet（"),_("strong",[v._v("有序")]),v._v("，红黑树）")]),v._v(" "),_("li",[v._v("Queue：PriorityQueue（大顶堆小顶堆）、Deque接口（ArrayDeque是实现类）")])]),v._v(" "),_("p",[v._v("Map接口：")]),v._v(" "),_("ol",[_("li",[_("p",[v._v("HashMap：JDK1.8以后由 数组+ 链表或红黑树 组成")])]),v._v(" "),_("li",[_("p",[v._v("LinkedHashMap： 在"),_("code",[v._v("HashMap")]),v._v("的基础上，增加了一条双向链表")])]),v._v(" "),_("li",[_("p",[v._v("Hashtable：数组+链表")])]),v._v(" "),_("li",[_("p",[v._v("TreeMap：红黑树（有序，默认是按 key 的升序排序）")]),v._v(" "),_("blockquote",[_("p",[v._v("相比于"),_("code",[v._v("HashMap")]),v._v("来说 "),_("code",[v._v("TreeMap")]),v._v(" 主要多了对集合中的元素根据键排序的能力以及对集合内元素的搜索的能力。")])])])]),v._v(" "),_("h1",{attrs:{id:"hashmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashmap"}},[v._v("#")]),v._v(" HashMap")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("散列表，存储键值对(key-value)映射，根据键的 HashCode 值存储数据；")])]),v._v(" "),_("li",[_("p",[_("strong",[v._v("非")]),v._v("线程安全，"),_("strong",[v._v("不支持线程同步")]),v._v("（并发环境下推荐使用 ConcurrentHashMap ）；")])]),v._v(" "),_("li",[_("p",[v._v("最多允许一条记录的键为 null，null 作为值可以有多个；")]),v._v(" "),_("blockquote",[_("p",[v._v("hashMap虽然支持key和value为null，但是null"),_("strong",[v._v("作为key只能有一个")]),v._v("，null作为value可以有多个；")]),v._v(" "),_("p",[v._v("因为hashMap中，如果key值一样，那么会覆盖相同key值的value为最新，所以key为null只能有一个。")])])]),v._v(" "),_("li",[_("p",[v._v("映射是"),_("strong",[v._v("无序")]),v._v("的；")])]),v._v(" "),_("li",[_("p",[v._v("继承于AbstractMap，实现了 Map、Cloneable、java.io.Serializable 接口。")])])]),v._v(" "),_("p",[v._v("HashMap 中的元素实际上是对象，一些常见的基本类型可以使用它的包装类。")]),v._v(" "),_("p",[v._v("JDK1.8 之前 "),_("code",[v._v("HashMap")]),v._v(" 由数组+链表组成的，也就是说创建一个链表数组，数组中每一格就是一个链表（“拉链法”解决冲突）；")]),v._v(" "),_("p",[v._v("JDK1.8 以后的 "),_("code",[v._v("HashMap")]),v._v(" 在"),_("strong",[v._v("解决哈希冲突")]),v._v("时有了较大的变化，当链表长度大于阈值（默认为 8）时，"),_("strong",[v._v("将链表转化为红黑树")]),v._v("（将链表转换成红黑树前会判断，如果当前数组的长度小于 64，那么会选择先进行"),_("strong",[v._v("数组扩容")]),v._v("，而不是转换为红黑树），以减少搜索时间。")]),v._v(" "),_("h2",{attrs:{id:"数组扩容"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#数组扩容"}},[v._v("#")]),v._v(" 数组扩容")]),v._v(" "),_("p",[v._v("什么时候需要扩容？答案："),_("strong",[v._v("1.初始化后放入元素时   2.达到阈值时")])]),v._v(" "),_("ol",[_("li",[_("p",[v._v("创建对象以后，HashMap并不是立即初始化，而是在"),_("strong",[v._v("第一次放入元素")]),v._v("时，才会初始化，这是HashMap"),_("strong",[v._v("节省内存")]),v._v("得一种机制，而初始化其实是"),_("strong",[v._v("resize()方法")]),v._v("实现的。")])]),v._v(" "),_("li",[_("p",[v._v("达到阈值时。所谓阈值，就是HashMap中threshold这个属性，"),_("strong",[v._v("capacity默认的初始容量为16，默认负载因子为0.75")]),v._v("，达到阈值时HashMap认为哈希冲突的次数会不能接受，因此需要扩容。")]),v._v(" "),_("p",[_("strong",[v._v("threshold（阈值）= capacity（table容量） *  loadFactor（负载因子）")])])])]),v._v(" "),_("p",[v._v("JDK1.8 hashmap 数组扩容：")]),v._v(" "),_("ul",[_("li",[v._v("空参数的构造函数：实例化的HashMap默认内部数组是null，即没有实例化。第一次调用put方法时，则会开始第一次初始化扩容，"),_("strong",[v._v("长度为16")]),v._v("。")]),v._v(" "),_("li",[v._v("有参构造函数：用于指定容量。会根据指定的正整数找到"),_("strong",[v._v("不小于指定容量的2的倍数")]),v._v("，作为数组的容量。")]),v._v(" "),_("li",[_("strong",[v._v("如果不是第一次扩容，则容量和阈值都变为原来的2倍")]),v._v("（负载因子不变）")])]),v._v(" "),_("p",[_("strong",[v._v("HashMap 的长度为什么是 2 的幂次方？")])]),v._v(" "),_("p",[v._v("保证散列的均匀性。")]),v._v(" "),_("p",[v._v("为了减少哈希碰撞。我们在计算key应该存在数组中哪个位置时，需要用"),_("code",[v._v("hash(KEY) % 数组长度")]),v._v("来计算，而这个式子等价于"),_("code",[v._v("hash(KEY) & (length - 1)")]),v._v("，当长度length为2的幂次方即偶数时，"),_("code",[v._v("length-1")]),v._v(" 为奇数，奇数的二进制最后一位是 1，这样便保证了( & )与运算的结果可能为奇数，也可能为偶数，这样便可以"),_("strong",[v._v("保证散列的均匀性")]),v._v("。")]),v._v(" "),_("h1",{attrs:{id:"concurrenthashmap"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#concurrenthashmap"}},[v._v("#")]),v._v(" ConcurrentHashMap")]),v._v(" "),_("p",[v._v("https://zhuanlan.zhihu.com/p/346803874 面试 ConcurrentHashMap")]),v._v(" "),_("p",[_("strong",[v._v("底层数据结构：")])]),v._v(" "),_("h2",{attrs:{id:"jdk1-7"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-7"}},[v._v("#")]),v._v(" jdk1.7")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("JDK1.7 的 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 底层采用 "),_("strong",[v._v("Segment数组")]),v._v(" 实现（Segment 数组 + HashEntry 数组 + 链表）；")]),v._v(" "),_("p",[v._v("一个 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 里包含一个 "),_("code",[v._v("Segment")]),v._v(" 数组，"),_("code",[v._v("Segment")]),v._v(" 的个数一旦"),_("strong",[v._v("初始化就不能改变")]),v._v("。 "),_("code",[v._v("Segment")]),v._v(" 数组的大小默认是 16，也就是说默认可以同时支持 16 个线程并发写。")]),v._v(" "),_("p",[v._v("它是类似于HashMap的结构，即内部拥有一个Entry数组，"),_("strong",[v._v("数组中的每个元素")]),v._v("又是一个"),_("strong",[v._v("链表")]),v._v("（Segment继承了ReentrantLock,所以 "),_("code",[v._v("Segment")]),v._v(" 是一种可重入锁，扮演锁的角色）。")]),v._v(" "),_("p",[v._v("每个 "),_("code",[v._v("Segment")]),v._v(" 守护着一个 "),_("code",[v._v("HashEntry")]),v._v(" 数组里的元素，当对 "),_("code",[v._v("HashEntry")]),v._v(" 数组的数据进行修改时，必须首先获得对应的 "),_("code",[v._v("Segment")]),v._v(" 的锁。也就是说，对同一 "),_("code",[v._v("Segment")]),v._v(" 的并发写入会被阻塞；不同 "),_("code",[v._v("Segment")]),v._v(" 的写入是可以并发执行的，所以，通过这一种结构，ConcurrentHashMap的"),_("strong",[v._v("并发能力大大的提高")]),v._v("。")])])]),v._v(" "),_("h2",{attrs:{id:"jdk1-8"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#jdk1-8"}},[v._v("#")]),v._v(" jdk1.8")]),v._v(" "),_("ul",[_("li",[_("p",[v._v("JDK1.8 摒弃了 "),_("code",[v._v("Segment")]),v._v(" 的概念，采用 "),_("strong",[v._v("Node数组+链表/红黑二叉树")]),v._v("；并发控制使用 "),_("strong",[v._v("CAS")]),v._v(" 和 "),_("strong",[_("code",[v._v("synchronized")])]),v._v("  来操作。")]),v._v(" "),_("p",[v._v("取消了 "),_("code",[v._v("Segment")]),v._v(" 分段锁，采用 "),_("code",[v._v("CAS + synchronized")]),v._v(" 来"),_("strong",[v._v("保证并发安全")]),v._v("。数据结构跟 "),_("code",[v._v("HashMap")]),v._v(" 1.8 的结构类似，数组+链表/红黑二叉树。Java 8 在链表长度超过一定阈值（8）时将链表（寻址时间复杂度为 O(N)）转换为红黑树（寻址时间复杂度为 O(log(N))）。")]),v._v(" "),_("p",[v._v("Java 8 中，"),_("strong",[v._v("锁粒度更细")]),v._v("，"),_("code",[v._v("synchronized")]),v._v(" "),_("strong",[v._v("只锁定")]),v._v("当前链表或红黑二叉树的"),_("strong",[v._v("首节点")]),v._v("，这样只要 hash 不冲突，就不会产生并发，"),_("strong",[v._v("就不会影响其他 Node 的读写")]),v._v("，效率大幅提升。")])])]),v._v(" "),_("p",[v._v("大致可以分为以下步骤：")]),v._v(" "),_("ol",[_("li",[v._v("根据 key 计算出 hash 值；")]),v._v(" "),_("li",[v._v("判断是否需要进行初始化；")]),v._v(" "),_("li",[v._v("定位到 Node，拿到首节点 f，判断首节点 f：\n"),_("ul",[_("li",[v._v("如果为 null ，则通过 "),_("strong",[v._v("CAS")]),v._v(" 的方式尝试添加；")]),v._v(" "),_("li",[v._v("如果为 "),_("code",[v._v("f.hash = MOVED = -1")]),v._v(" ，说明其他线程在扩容，参与一起扩容；")]),v._v(" "),_("li",[v._v("如果都不满足 ，"),_("strong",[v._v("synchronized")]),v._v(" 锁住 f 节点，判断是链表还是红黑树，遍历插入；")])])])]),v._v(" "),_("p",[_("strong",[v._v("JDK 1.7 和 JDK 1.8 的 ConcurrentHashMap 实现有什么不同？")])]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("线程安全实现方式")]),v._v(" ：JDK 1.7 采用 "),_("code",[v._v("Segment")]),v._v(" 分段锁来保证安全， "),_("code",[v._v("Segment")]),v._v(" 是继承自 "),_("code",[v._v("ReentrantLock")]),v._v("。JDK1.8 放弃了 "),_("code",[v._v("Segment")]),v._v(" 分段锁的设计，采用 "),_("code",[v._v("Node + CAS + synchronized")]),v._v(" 保证线程安全，"),_("strong",[v._v("锁粒度更细")]),v._v("，"),_("code",[v._v("synchronized")]),v._v(" 只锁定当前链表或红黑二叉树的首节点。")]),v._v(" "),_("li",[_("strong",[v._v("Hash 碰撞解决方法")]),v._v(" :  JDK 1.7 采用拉链法，JDK1.8 采用拉链法结合红黑树（链表长度超过一定阈值时，将链表转换为红黑树）。")]),v._v(" "),_("li",[_("strong",[v._v("并发度")]),v._v(" ：JDK 1.7 最大并发度是 Segment 的个数，默认是 16。JDK 1.8 最大并发度是 Node 数组的大小，并发度更大")])]),v._v(" "),_("p",[v._v("不过，Node 只能用于链表的情况，红黑树的情况需要使用 "),_("strong",[_("code",[v._v("TreeNode")])]),v._v("。当冲突链表达到一定长度时，链表会转换成红黑树。")]),v._v(" "),_("p",[_("code",[v._v("TreeNode")]),v._v("是存储红黑树节点，被"),_("code",[v._v("TreeBin")]),v._v("包装。"),_("code",[v._v("TreeBin")]),v._v("通过"),_("code",[v._v("root")]),v._v("属性维护红黑树的根结点，因为红黑树在旋转的时候，根结点可能会被它原来的子节点替换掉，在这个时间点，如果有其他线程要写这棵红黑树就会发生线程不安全问题，所以在 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 中"),_("code",[v._v("TreeBin")]),v._v("通过"),_("code",[v._v("waiter")]),v._v("属性维护当前使用这棵红黑树的线程，来防止其他线程的进入。")]),v._v(" "),_("h1",{attrs:{id:"hashtable"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashtable"}},[v._v("#")]),v._v(" Hashtable")]),v._v(" "),_("ul",[_("li",[_("strong",[v._v("线程安全")]),v._v("，因为 "),_("code",[v._v("Hashtable")]),v._v(" 内部的方法基本都经过"),_("code",[v._v("synchronized")]),v._v(" 修饰（如果你要保证线程安全的话就使用 "),_("code",[v._v("ConcurrentHashMap")]),v._v(" 吧）；")]),v._v(" "),_("li",[v._v("它的key、value都"),_("strong",[v._v("不可以为null")]),v._v("，否则会抛出 "),_("code",[v._v("NullPointerException")]),v._v("；")]),v._v(" "),_("li",[v._v("映射是"),_("strong",[v._v("无序")]),v._v("的。")])]),v._v(" "),_("p",[_("code",[v._v("Hashtable")]),v._v(" 和 JDK1.8 之前的 "),_("code",[v._v("HashMap")]),v._v(" 的底层数据结构类似，都是采用 "),_("strong",[v._v("数组+链表")]),v._v(" 的形式。")]),v._v(" "),_("p",[v._v("HashTable是一个线程安全的类，它使用synchronized来"),_("strong",[v._v("锁住整张Hash表")]),v._v("来实现线程安全，即每次锁住整张表让线程独占，相当于所有线程进行读写时都去竞争一把锁，导致效率非常低下。")]),v._v(" "),_("h1",{attrs:{id:"hashset"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#hashset"}},[v._v("#")]),v._v(" HashSet")]),v._v(" "),_("p",[v._v("HashSet如何解决重复？")]),v._v(" "),_("blockquote",[_("p",[v._v("当你把对象加入"),_("code",[v._v("HashSet")]),v._v("时，"),_("code",[v._v("HashSet")]),v._v(" 会先计算对象的"),_("code",[v._v("hashcode")]),v._v("值来判断对象加入的位置，同时也会与其他加入的对象的 "),_("code",[v._v("hashcode")]),v._v(" 值作比较，如果没有相符的 "),_("code",[v._v("hashcode")]),v._v("，"),_("code",[v._v("HashSet")]),v._v(" 会假设对象没有重复出现。但是如果发现有相同 "),_("code",[v._v("hashcode")]),v._v(" 值的对象，这时会调用"),_("code",[v._v("equals()")]),v._v("方法来检查 "),_("code",[v._v("hashcode")]),v._v(" 相等的对象是否真的相同。如果两者相同，"),_("code",[v._v("HashSet")]),v._v(" 就不会让加入操作成功。")])])])}),[],!1,null,null,null);_.default=t.exports}}]);