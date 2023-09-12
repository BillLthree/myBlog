(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{415:function(v,o,_){"use strict";_.r(o);var r=_(2),t=Object(r.a)({},(function(){var v=this,o=v._self._c;return o("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[o("h1",{attrs:{id:"jmm内存模型"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#jmm内存模型"}},[v._v("#")]),v._v(" JMM内存模型")]),v._v(" "),o("p",[v._v("https://cloud.tencent.com/developer/article/1462257")]),v._v(" "),o("p",[v._v("Java内存模型(java memory model)")]),v._v(" "),o("blockquote",[o("p",[v._v("内存模型（Java Memory Model，简称 JMM ）定义了线程和主内存之间的抽象关系，是一种"),o("strong",[v._v("规范")]),v._v("。")])]),v._v(" "),o("p",[v._v("为了保证共享内存的正确性（可见性、有序性、原子性），内存模型定义了共享内存系统中多线程程序"),o("strong",[v._v("读写操作行为的规范")]),v._v("。通过这些规则来规范对内存的读写操作，从而保证指令执行的正确性。"),o("strong",[v._v("目的")]),v._v("是解决由于多线程通过共享内存进行通信时，存在的本地内存数据不一致、编译器会对代码指令重排序、处理器会对代码乱序执行等带来的问题；也即"),o("strong",[v._v("缓存一致性问题、编译器指令重排问题、处理器优化问题")]),v._v("（乱序执行代码）。")]),v._v(" "),o("ul",[o("li",[v._v("缓存一致性问题其实就是可见性问题，指令重排即会导致有序性问题，而处理器优化是可以导致原子性问题的。")])]),v._v(" "),o("p",[v._v("内存模型解决并发问题主要采用两种方式："),o("strong",[v._v("限制处理器优化")]),v._v("和"),o("strong",[v._v("使用内存屏障")]),v._v("。")]),v._v(" "),o("h2",{attrs:{id:"happens-before规则"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#happens-before规则"}},[v._v("#")]),v._v(" happens-before规则")]),v._v(" "),o("p",[v._v("JMM基于happens-before规则限制优化。")]),v._v(" "),o("p",[v._v("happens-before表示的是前一个操作的结果对于后续操作是可见的，它是一种表达多个线程之间对于内存的可见性。")]),v._v(" "),o("p",[v._v("JMM对两种不同性质的重排序，采取了不同的策略，如下：")]),v._v(" "),o("ul",[o("li",[v._v("对于会"),o("strong",[v._v("改变程序执行结果")]),v._v("的重排序，JMM要求编译器和处理器"),o("strong",[v._v("必须禁止")]),v._v("这种重排序。")]),v._v(" "),o("li",[v._v("对于"),o("strong",[v._v("不会改变程序执行结果")]),v._v("的重排序，JMM对编译器和处理器"),o("strong",[v._v("不做要求")]),v._v("（JMM允许这种重排序）。")])]),v._v(" "),o("p",[v._v("JMM设计示意图")]),v._v(" "),o("img",{staticStyle:{zoom:"67%"},attrs:{src:"https://billrepo.oss-cn-hangzhou.aliyuncs.com/doc-img/image-20230222142708680.png",alt:"image-20230222142708680"}}),v._v(" "),o("p",[v._v("JSR-133中对happens-before（在xxx之前发生）关系的定义：")]),v._v(" "),o("ol",[o("li",[v._v("如果一个操作happens-before另一个操作，那么第一个操作的执行结果将对第二个操作可见，而且第一个操作的执行顺序排在第二个操作之前。")]),v._v(" "),o("li",[v._v("两个操作之间存在happens-before关系，并不意味着Java平台的具体实现必须要按照happens-before关系指定的顺序来执行。如果重排序之后的执行结果，与按happens-before关系来执行的结果一致，那么这种重排序并不非法(也就是说，JMM允许这种重排序)。")])]),v._v(" "),o("p",[v._v("Java内存模型，除了定义了一套规范，还提供了一系列原语（比如"),o("code",[v._v("volatile")]),v._v("、"),o("code",[v._v("synchronized")]),v._v("、"),o("code",[v._v("final")]),v._v("、"),o("code",[v._v("concurren")]),v._v("包等），封装了底层实现后，供开发者直接使用。")]),v._v(" "),o("h2",{attrs:{id:"内存屏障"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#内存屏障"}},[v._v("#")]),v._v(" 内存屏障")]),v._v(" "),o("p",[v._v("（Memory Barriers）")]),v._v(" "),o("p",[v._v("内存屏障可以说是一些指令集，作用于cpu和编译器。防止屏障指令前后代码乱序。")]),v._v(" "),o("p",[v._v("读操作（装载）load，写操作（存储）store")]),v._v(" "),o("ol",[o("li",[o("strong",[v._v("LoadLoad Barrier（读读屏障）")]),v._v("：指令 "),o("strong",[v._v("Load1; LoadLoad; Load2")]),v._v(" 保证了 Load1 先于 Load2 和后续所有的 load 指令加载数据。")]),v._v(" "),o("li",[o("strong",[v._v("StoreStore Barrier（写写屏障）")]),v._v("：指令 "),o("strong",[v._v("Store1; StoreStore; Store2")]),v._v(" 保证了 Store1 的数据先于 Store2 及后续所有 store 指令的数据对其他处理器可见（刷新到内存）。")]),v._v(" "),o("li",[o("strong",[v._v("LoadStore Barrier（读写屏障）")]),v._v("：指令 "),o("strong",[v._v("Load1; LoadStore; Store2")]),v._v(" 保证了 Load1 的加载数据先于 Store2 及后续所有的 store 指令刷新数据到主内存。只有在乱序（out-of-order）处理器上，等待写指令（waiting store instructions）可以绕过读指令（loads）的情况下，才会需要使用 LoadStore 屏障。")]),v._v(" "),o("li",[o("strong",[v._v("StoreLoad Barrier（写读屏障）")]),v._v("："),o("strong",[v._v("刷新写缓冲区，最耗时")]),v._v(" 指令 "),o("strong",[v._v("Store1; StoreLoad; Load2")]),v._v(" 保证了 Store1 的数据对其他处理器可见（刷新数据到内存）先于 Load2 及后续所有的 load 指令加载数据。"),o("strong",[v._v("StoreLoad Barrier会使该屏障之前的所有内存访问指令（load和store指令）完成以后，才执行该屏障之后的指令。")])])]),v._v(" "),o("img",{attrs:{src:"https://billrepo.oss-cn-hangzhou.aliyuncs.com/doc-img/image-20230222163521103.png"}}),v._v(" "),o("p",[v._v("读取流程：")]),v._v(" "),o("ul",[o("li",[v._v("cpu从内存读取数据，然后放入L1,L2缓存区,然后从L1 L2存缓存区放入Load Buffer，最后由Cpu寄存器读取，二次读取的时候从Load Buffer读取即可，如果Load Buffer满时，清空Load Buffer在进行L1 L2缓存区读取。")])]),v._v(" "),o("p",[v._v("存储流程：")]),v._v(" "),o("ul",[o("li",[v._v("Cpu寄存器的数值 放入 Store Buffer中，然后Store Buffer满时刷回L1 L2缓存区。")])]),v._v(" "),o("p",[v._v("可见性问题：")]),v._v(" "),o("ul",[o("li",[v._v("那么在多线程运行下，如果Cpu1和Cpu2同时读取的变量A放入L1,L2缓存区，此时Cpu1修改L1缓存区变量A，但是没有刷回主内存中，这将导致Cpu2无法看见最新值。")])]),v._v(" "),o("h2",{attrs:{id:"原子性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#原子性"}},[v._v("#")]),v._v(" "),o("strong",[v._v("原子性")])]),v._v(" "),o("blockquote",[o("p",[v._v("原子性是指一个操作要不就执行完成，要不就不执行。")])]),v._v(" "),o("p",[v._v("在Java中，为了保证原子性，提供了两个高级的"),o("strong",[v._v("字节码指令")]),v._v("monitorenter和monitorexit。这两个字节码，在Java中对应的"),o("strong",[v._v("关键字")]),v._v("就是synchronized。")]),v._v(" "),o("p",[v._v("因此，在Java中可以使用"),o("strong",[v._v("synchronized")]),v._v("来保证方法和代码块内的操作是原子性的。")]),v._v(" "),o("h2",{attrs:{id:"可见性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#可见性"}},[v._v("#")]),v._v(" "),o("strong",[v._v("可见性")])]),v._v(" "),o("blockquote",[o("p",[v._v("可见性是指当多个线程访问同一个变量时，一个线程修改了这个变量的值，其他线程能够"),o("strong",[v._v("立即看到")]),v._v("修改后的值。")])]),v._v(" "),o("p",[v._v("Java内存模型是通过"),o("strong",[v._v("在变量修改后将新值同步回主内存")]),v._v("，"),o("strong",[v._v("在变量读取前从主内存刷新变量值")]),v._v("的这种依赖主内存作为传递媒介的方式来实现的。")]),v._v(" "),o("p",[v._v("Java中的"),o("strong",[v._v("volatile")]),v._v("关键字提供了一个功能，那就是被其修饰的变量在被修改后可以立即同步到主内存，被其修饰的变量在每次使用之前都从主内存刷新。")]),v._v(" "),o("p",[v._v("通过插入"),o("strong",[v._v("内存屏障")]),v._v("实现")]),v._v(" "),o("h2",{attrs:{id:"有序性"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#有序性"}},[v._v("#")]),v._v(" "),o("strong",[v._v("有序性")])]),v._v(" "),o("blockquote",[o("p",[v._v("有序性即程序执行的顺序按照代码的先后顺序执行。")])]),v._v(" "),o("p",[v._v("在Java中，可以使用synchronized和volatile来保证多线程之间操作的有序性。实现方式有所区别：")]),v._v(" "),o("ol",[o("li",[v._v("volatile关键字会禁止指令重排。")]),v._v(" "),o("li",[v._v("synchronized关键字保证同一时刻只允许一条线程操作。")])])])}),[],!1,null,null,null);o.default=t.exports}}]);