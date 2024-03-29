(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{434:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"静态-动态代理的实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态-动态代理的实现"}},[t._v("#")]),t._v(" 静态&动态代理的实现")]),t._v(" "),s("p",[t._v("https://cloud.tencent.com/developer/article/1429932 腾讯云：Java 静态代理、Java动态代理、CGLIB动态代理")]),t._v(" "),s("p",[t._v("客户类 --\x3e 代理类 --\x3e 委托类(目标类)")]),t._v(" "),s("p",[t._v("用户 --\x3e 商店 --\x3e 工厂 (工厂生产玩具，商店卖玩具，用户通过商店购买工厂生产的玩具，商店就相当于中介代理)")]),t._v(" "),s("p",[t._v("Java 的代理就是客户类不再直接和委托类打交道, 而是通过一个中间层来访问, 这个中间层就是代理。为啥要这样呢, 是因为使用代理有两个优势：")]),t._v(" "),s("ul",[s("li",[t._v("可以隐藏委托类的实现")]),t._v(" "),s("li",[t._v("可以实现客户与委托类之间的解耦, 在不修改委托类代码的情况下能够做一些额外的处理("),s("strong",[t._v("功能增强")]),t._v(")")])]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[s("strong",[t._v("静态代理和动态代理的区别")])]),t._v(" "),s("p",[t._v("静态代理的关系在编译期间就已经确定了，而动态代理的关系是在运行期间确定的。")]),t._v(" "),s("p",[t._v("静态代理和动态代理都是基于接口实现的, 而对于那些没有提供接口只是提供了实现类的而言, 就只能选择 CGLIB 动态代理了。")]),t._v(" "),s("p",[t._v("动态代理与静态代理相比较，最大的好处是接口中声明的所有方法都被转移到调用处理器一个集中的方法中处理**(InvocationHandler的invoke方法)**。这样，在接口方法数量比较多的时候，我们可以进行灵活处理，而不需要像静态代理那样在每一个方法进行中转。")]),t._v(" "),s("p",[t._v("如果接口增加一个方法，静态代理模式除了所有接口实现类需要实现这个方法外，所有代理类也需要实现此方法。增加了代码维护的复杂度。而动态代理不会出现该问题。")]),t._v(" "),s("p",[s("strong",[t._v("JDK代理和CGLIB代理的区别")])]),t._v(" "),s("ol",[s("li",[t._v("JDK 动态代理基于反射实现，只能对"),s("strong",[t._v("实现了接口的类")]),t._v("生成代理，而不能针对类。")]),t._v(" "),s("li",[t._v("CGLIB 动态代理基于 ASM 框架通过生成业务类的子类来实现，覆盖其中的方法。因为是继承，所以该业务类或方法不能声明成 final 类型。")])]),t._v(" "),s("p",[s("strong",[t._v("描述代理的几种实现方式? 分别说出优缺点?")])]),t._v(" "),s("p",[s("strong",[t._v("静态代理")]),t._v("：代理对象和实际对象都继承了同一个接口，在代理对象中指向的是实际对象的实例，这样对外暴露的是代理对象而真正调用的是实际对象。")]),t._v(" "),s("ul",[s("li",[t._v("优点：可以很好的保护实际对象的业务逻辑对外暴露，从而提高安全性。")]),t._v(" "),s("li",[t._v("缺点：不同的接口要有不同的代理类实现，会很冗余；若接口修改，实现类需要修改，代理类也需修改；")])]),t._v(" "),s("p",[s("strong",[t._v("JDK 动态代理")]),t._v("： 为了解决静态代理中，生成大量的代理类造成的冗余； JDK 动态代理只需要实现 InvocationHandler 接口，重写 invoke 方法便可以完成代理的实现；利用 Proxy 类的newProxyInstance() 生产代理类对象。")]),t._v(" "),s("p",[t._v("jdk 的代理是利用反射生成代理类 Proxyxx.class 字节码，并生成对象。 jdk 动态代理之所以只能代理接口是因为代理类本身已经 extends 了 Proxy，而 java 是不允许多重继承的，但是允许实现多个接口。")]),t._v(" "),s("ul",[s("li",[t._v("优点：解决了静态代理中冗余的代理实现类问题。")]),t._v(" "),s("li",[t._v("缺点：JDK 动态代理是基于接口设计实现的，如果没有接口，会抛异常。")])]),t._v(" "),s("p",[s("strong",[t._v("CGLIB 代理：")]),t._v(" 由于 JDK 动态代理限制了只能基于接口设计，而对于没有接口的情况，JDK 方式解决不了。 CGLib 采用了非常底层的字节码技术，其原理是通过字节码技术为一个类创建子类，并在子类中采用方法拦截的技术拦截所有父类方法的调用，顺势织入横切逻辑，来完成动态代理的实现。"),s("strong",[t._v("简单来说就是对指定的委托类生成一个子类并重写其中业务方法来实现代理。代理类对象是由 Enhancer 类创建的。")])]),t._v(" "),s("p",[t._v("实现方式：实现 MethodInterceptor 接口，重写 intercept 方法，通过 Enhancer 类的回调方法来实现。")]),t._v(" "),s("p",[t._v("但是 CGLib 在创建代理对象时所花费的时间却比 JDK 多得多，所以对于单例的对象，因为无需频繁创建对象，用 CGLib 合适，反之，使用 JDK 方式要更为合适一些。 同时，由于 CGLib 由于是采用动态创建子类的方法，对于 final 方法，无法进行代理。")]),t._v(" "),s("ul",[s("li",[t._v("优点：没有接口也能实现动态代理，为JDK动态代理提供了很好的补充；采用字节码增强技术，性能也不错。")]),t._v(" "),s("li",[t._v("缺点：不能对声明为final的类和方法进行代理。")])]),t._v(" "),s("h2",{attrs:{id:"静态代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#静态代理"}},[t._v("#")]),t._v(" 静态代理")]),t._v(" "),s("p",[t._v("首先，定义接口和接口的实现类, 然后定义接口的代理对象, 将接口的实例注入到代理对象中, 然后通过代理对象去调用真正的实现类。")]),t._v(" "),s("p",[t._v("静态代理的缺点：")]),t._v(" "),s("ol",[s("li",[t._v("如果接口增加一个方法，除了所有接口实现类需要实现这个方法外，所有代理类也需要实现此方法，"),s("strong",[t._v("增加了代码维护的复杂度")]),t._v("。")]),t._v(" "),s("li",[t._v("当委托类方法成千上万时，代理类需要写的代理方法就很多。所以静态代理在"),s("strong",[t._v("委托类方法较少")]),t._v("时适用。")]),t._v(" "),s("li",[t._v("因为不同的接口要有不同的代理类实现，会很冗余，适合于"),s("strong",[t._v("代理类较少")]),t._v("且确定的情况。")])]),t._v(" "),s("h2",{attrs:{id:"jdk动态代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jdk动态代理"}},[t._v("#")]),t._v(" jdk动态代理")]),t._v(" "),s("p",[t._v("代理类 --\x3e 中间类 --\x3e 委托类")]),t._v(" "),s("p",[t._v("在 Java 的动态代理中, 主要涉及 2 个类,"),s("code",[t._v("java.lang.reflect.Proxy")]),t._v("和"),s("code",[t._v("java.lang.reflect.InvocationHandler")]),t._v("。")]),t._v(" "),s("p",[t._v("我们需要一个实现了 InvocationHandler(调用处理器) 接口的中间类, 这个接口只有一个方法 invoke 方法，中间类重写了invoke方法。代理类对中间类发起的所有方法调用都会变成对invoke方法的调用。"),s("strong",[t._v("中间类 (实现了 InvocationHandler 的类) 持有一个委托类对象引用, 在重写的invoke 方法中调用了委托类对象的相应方法，通过这种聚合的方式持有委托类对象引用，把外部对 invoke 的调用最终都转为对委托类对象的调用。")])]),t._v(" "),s("p",[t._v("关于代理类，"),s("strong",[t._v("通过 Proxy 类的 newProxyInstance() 方法获取代理类的实例对象")]),t._v(", 之后通过这个代理类的实例"),s("strong",[t._v("调用方法")]),t._v("，对代理类的方法调用都会调用中间类 (实现了 invocationHandle 的类) 的 invoke 方法，在 invoke 方法中我们调用委托类的对应方法，然后加上自己的处理逻辑。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 委托类接口")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IHelloService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 方法1\n     * @param userName\n     * @return\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 方法2\n     * @param userName\n     * @return\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayByeBye")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 委托类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IHelloService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayByeBye")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ByeBye"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" userName "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('" ByeBye"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 中间类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaProxyInvocationHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("InvocationHandler")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//中间类持有委托类对象的引用,这里会构成一种静态代理关系")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 有参构造器,传入委托类的对象\n     * @param obj 委托类的对象\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaProxyInvocationHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("obj "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n     "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     *\n     * 中间类重写的invoke方法有三个参数:\n     * @param proxy 动态代理对象\n     * @param method 代理方法(通过代理对象调用的方法)\n     * @param args 代理方法的参数\n     * @return\n     * @throws Throwable\n     */")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Override")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" proxy"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Method")]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("throws")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Throwable")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invoke before"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//通过method.invoke()调用委托类的方法并返回结果；可以在method.invoke()前后自定义处理逻辑实现方法增强")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" method"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("invoke")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"invoke after"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    \n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n     * 动态生成代理类对象,Proxy.newProxyInstance\n     * @return 返回代理类的实例\n     */")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Object")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newProxyInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Proxy")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newProxyInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//指定代理对象的类加载器")]),t._v("\n                obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClassLoader")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代理对象需要实现的接口(即委托类实现的接口)，可以同时指定多个接口")]),t._v("\n                obj"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getClass")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInterfaces")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//代理对象对应的InvocationHandler，方法调用的实际处理者，对代理对象的方法调用都会转发到这里")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 测试动态代理类")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MainJavaProxy")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaProxyInvocationHandler")]),t._v(" proxyInvocationHandler "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" \n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("JavaProxyInvocationHandler")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//传入委托类对象")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IHelloService")]),t._v(" helloService "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("IHelloService")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" proxyInvocationHandler"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("newProxyInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        helloService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayByeBye")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"paopao"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        helloService"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("sayHello")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"yupao"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("动态代理关系实际上由两组静态代理关系组成，它也是动态代理的原理：")]),t._v(" "),s("ul",[s("li",[t._v("中间类与委托类构成了一个静态代理关系")]),t._v(" "),s("li",[t._v("代理类与中间类也构成一个静态代理关系")])]),t._v(" "),s("p",[t._v("java 动态代理最大的特点就是"),s("strong",[t._v("动态生成的代理类和委托类实现同一个接口")]),t._v("。")]),t._v(" "),s("p",[t._v("java 动态代理其实内部是通过反射机制实现的，也就是已知的一个对象，在运行的时候动态调用它的方法，并且调用的时候还可以加一些自己的逻辑在里面。")]),t._v(" "),s("h2",{attrs:{id:"cglib代理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cglib代理"}},[t._v("#")]),t._v(" CGLIB代理")]),t._v(" "),s("p",[t._v("JDK 动态代理"),s("strong",[t._v("依赖接口实现")]),t._v("，而当我们只有类没有接口的时候就需要使用另一种动态代理技术 CGLIB 动态代理。首先 CGLIB 动态代理是第三方框架实现的，在 maven 工程中我们需要引入 cglib 的包。")]),t._v(" "),s("p",[t._v("CGLIB 代理是"),s("strong",[t._v("针对类")]),t._v("来实现代理的，原理是"),s("strong",[t._v("对指定的委托类生成一个子类并重写其中业务方法")]),t._v("来实现代理。代理类对象是由 Enhancer 类创建的。CGLIB 创建动态代理类的模式是:")]),t._v(" "),s("ol",[s("li",[t._v("查找目标类上的所有非 final 的 public 类型的方法 (final 的不能被重写)")]),t._v(" "),s("li",[t._v("将这些方法的定义转成字节码")]),t._v(" "),s("li",[t._v("将组成的字节码转换成相应的代理的 Class 对象然后通过反射获得代理类的实例对象")]),t._v(" "),s("li",[t._v("实现 MethodInterceptor 接口, 用来处理对代理类上所有方法的请求")])]),t._v(" "),s("p",[t._v("对于需要被代理的类，它只是动态生成一个子类以覆盖非 final 的方法，同时绑定钩子回调自定义的拦截器。")])])}),[],!1,null,null,null);s.default=e.exports}}]);